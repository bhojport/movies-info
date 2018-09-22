import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { MoviesCard } from 'components/Card'
import { apiRequestMovies } from 'api'
import { mapStateToProps, mapDispatchToProps } from './connector'
import { modifyNoteUtil } from 'utils'

class MoviesContainer extends Component {
  state = {
    movieDetail: {},
    movies: {},
    movieNote: this.props.storeMovieNote,
    fetchError: null
  }

  addMovieNote = (id, text) => () => {
    this.props.onAddNote(id, text)
  }

  updateMovieNote = (id, text) => () => {
    this.setState((state) => {
      return {
        movieNote: modifyNoteUtil(state.movieNote, id, text) // remove the status
      }
    })
    this.props.onUpdateNote(id, text)
  }

  removeMovieNote = (id) => () => {
    this.setState((state) => {
      return {
        movieNote: modifyNoteUtil(state.movieNote, id)
      }
    })
    this.props.onRemoveNote(id)
  }

  editMovieNote = (id, text) => () => {
    this.setState((state) => {
      return {
        movieNote: modifyNoteUtil(state.movieNote, id, text, 'edit')
      }
    })
  }

  onChangeNote = (id, edit) => (e) => {
    e.persist()
    this.setState((state) => {
      return {
        movieNote: modifyNoteUtil(state.movieNote, id, e.target.value, edit)
      }
    })
  }

  componentDidMount() {
    const { REACT_APP_API_URL: api_url, REACT_APP_API_KEY: api_key } = process.env
    const { id } = this.props.match.params
    const discoverMovieUrl = `${api_url}/discover/movie?api_key=${api_key}`
    const movieDetailUrl = `${api_url}/movie/${id}?api_key=${api_key}&append_to_response=videos`

    if(id) {
      apiRequestMovies(movieDetailUrl).then(data => {
        this.setState({
          movieDetail: data
        })
      }).catch((err) => {
        this.setState({
          fetchError: err
        })
      })
    } else {
      apiRequestMovies(discoverMovieUrl).then(data => {
        this.setState({
          movies: data
        })
      }).catch((err) => {
        this.setState({
          fetchError: err
        })
      })
    }    
  }

  componentDidUpdate(prevProps) {
    if(JSON.stringify(this.props.storeSearchedMovie) !== JSON.stringify(prevProps.storeSearchedMovie)) {
      this.setState({
        movies: this.props.storeSearchedMovie
      })
    }
  }

  render() {
    const { movies, movieDetail, movieNote, fetchError } = this.state
    const { storeMovieNote, match: { params: { id } } } = this.props
    if (fetchError) {
      return <h1 className="text-white h5">Something went wrong, please try refreshing the page.</h1>
    }

    return <MoviesCard
      id={id}
      movie={id ? movieDetail : movies}
      onAddMovieNote={this.addMovieNote}
      movieNote={movieNote}
      onChangeNote={this.onChangeNote}
      storeMovieNote={storeMovieNote}
      onRemoveMovieNote={this.removeMovieNote}
      onEditMovieNote={this.editMovieNote}
      onUpdateMovieNote={this.updateMovieNote}
    />

    
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
)