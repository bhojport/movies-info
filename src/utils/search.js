import { store } from 'store'
import { apiRequestMovies } from 'api'
import { searchedMovie } from 'actions'


export const onSearch = (e) => {
  const { REACT_APP_API_URL: api_url, REACT_APP_API_KEY: api_key } = process.env
  const searchMovieUrl = `${api_url}/search/movie?api_key=${api_key}&query=${e.target.value}`
  const discoverMovieUrl = `${api_url}/discover/movie?api_key=${api_key}`

  const req_url = e.target.value ? searchMovieUrl : discoverMovieUrl

  // @TODO: debounce search
  apiRequestMovies(req_url).then(data => {
    store.dispatch(searchedMovie(data))
  })

}