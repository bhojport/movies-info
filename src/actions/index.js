import { ADD_MOVIE_NOTE, UPDATE_MOVIE_NOTE, REMOVE_MOVIE_NOTE, SEARCHED_MOVIE } from 'types'

export const addNote = (payload) => ({ type: ADD_MOVIE_NOTE, payload })
export const updateNote = (payload) => ({ type: UPDATE_MOVIE_NOTE, payload })
export const removeNote = (payload) => ({ type: REMOVE_MOVIE_NOTE, payload })

export const searchedMovie = (payload) => ({ type: SEARCHED_MOVIE, payload })