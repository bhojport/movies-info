const storeMovieGenres = async () => {
  const { REACT_APP_API_URL: api_url, REACT_APP_API_KEY: api_key } = process.env
  const genreUrl = `${api_url}/genre/movie/list?api_key=${api_key}`
  return await(await fetch(genreUrl)).json()
}

export const requestMovies = async (url) => {
  if(!localStorage.getItem('movie-genres')) {
    storeMovieGenres().then(data => {
      localStorage.setItem('movie-genres',JSON.stringify(data.genres))
    })
  }
  return await(await fetch(url)).json()
}