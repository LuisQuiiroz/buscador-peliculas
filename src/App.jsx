import debounce from 'just-debounce-it'
import { useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSEarch'

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const debounceGetMovies = useCallback(debounce((search) => {
    getMovies({ search })
  }, 500)
  , [])

  const onChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  return (
    <>
      <header>
        <form onSubmit={onSubmit}>
          <input type='text' value={search} onChange={onChange} autoFocus />
          <button> Buscar</button>
          {
            error && <p className='error'>{error}</p>
          }
        </form>
      </header>
      <main>
        {loading && 'Cargando...'}
        {movies.length > 0
          ? <Movies movies={movies} />
          : <p>Aquí se mostraran las peliculas</p>}
      </main>
    </>

  )
}

export default App
