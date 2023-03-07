import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies (search) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const prevSearch = useRef(search)

  const getMovies = async ({ search }) => {
    if (prevSearch.current === search) return
    try {
      setLoading(true)
      prevSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      throw new Error('Error showwing movies')
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading }
}
