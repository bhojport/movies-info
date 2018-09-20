import initialStore from 'initialStore'
import { ADD_MOVIE_NOTE, UPDATE_MOVIE_NOTE, REMOVE_MOVIE_NOTE, SEARCHED_MOVIE } from 'types'
import { modifyNoteUtil } from 'utils'

const moviesNotes = (state = initialStore, action) => {
  switch(action.type) {
    case ADD_MOVIE_NOTE: {
      const {id, text} = action.payload
      return {
        ...state,
        movieNote: modifyNoteUtil(state.movieNote,id,text,'add')
      }
    }
    case UPDATE_MOVIE_NOTE:{
      const { id, text } = action.payload
      return {
        ...state,
        movieNote: modifyNoteUtil(state.movieNote, id, text)
      }
    }
    case REMOVE_MOVIE_NOTE: {
      const { payload: id } = action
      return {
        ...state,
        movieNote: modifyNoteUtil(state.movieNote,id)
      }
    }
    case SEARCHED_MOVIE: {
      return {
        ...state,
        movies: action.payload
      }
    }
    default:
      return state
  }
}

export default moviesNotes