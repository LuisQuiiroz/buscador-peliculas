import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  const firstSearch = useRef(true)

  useEffect(() => {
    if (firstSearch.current) {
      firstSearch.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (search.length < 3) {
      setError('deben de ser al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, setSearch, error }
}
