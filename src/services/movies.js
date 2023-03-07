const baseurl = 'https://www.omdbapi.com/?apikey=98bff526'
export async function searchMovies ({ search }) {
  const newSearch = search.trim()
  if (newSearch === '') return
  try {
    const res = await fetch(`${baseurl}&s=${newSearch}`)
    const json = await res.json()
    const movies = json.Search
    return (movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    })))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
