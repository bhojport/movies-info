import React from 'react'
import { RenderMovieCard, RenderMovieDetailCard } from './renderers'
const MoviesCard = ({ id, movie, ...rest }) => {
  if(id) return <RenderMovieDetailCard movie={movie} {...rest} />
  const { results } = movie
  if (!results) return null
  return results.map((movie, index) => {
    return <RenderMovieCard movie={movie} key={index} {...rest} />
  })
}

export default MoviesCard