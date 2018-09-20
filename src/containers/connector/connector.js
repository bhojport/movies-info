import { addNote, removeNote, updateNote } from 'actions'

export const mapStateToProps = (state) => {
  return {
    storeMovieNote: state.movieNote,
    storeSearchedMovie: state.movies
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddNote: (id, text) => {
      dispatch(addNote({ id, text }))
    },
    onRemoveNote: (id) => {
      dispatch(removeNote(id))
    },
    onUpdateNote: (id, text) => {
      dispatch(updateNote({ id, text }))
    }
  }
}