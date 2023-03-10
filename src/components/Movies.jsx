
function FoundMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies?.map(movie => (
          <li key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.img} alt={movie.title} />
          </li>
        ))
        }
    </ul>
  )
}

function NotFound () {
  return <p>No se encontraron peliculas con ese nombre</p>
}
export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <FoundMovies movies={movies} />
      : <NotFound />
  )
}
