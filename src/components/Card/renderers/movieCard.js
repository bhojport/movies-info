import React from 'react'
import { Link } from 'react-router-dom'
import { RenderMovieNote } from './'
export const movieCard = ({movie, ...rest}) => {
  const { REACT_APP_API_IMAGE_URL: api_image_url } = process.env
  const movieGenres = JSON.parse(localStorage.getItem('movie-genres')) || []
  return (
    <div className="col-4">
      <div className="card text-white bg-dark mb-3">
        <div className="card-header">{movie.title}</div>
        <div className="card-body row no-gutters">
          <div className="col-6">
            <Link to={`/${movie.id}`}>
            {movie.poster_path && <img className="card-img-top mb-3" src={`${api_image_url}/${movie.poster_path}`} alt={movie.title} />}
            </Link>
            {movie.title && <h2 className="h6">{movie.title}</h2>}
            <p className="small">
              {
                movieGenres.filter(g => movie.genre_ids.includes(g.id)).map(m => m.name).join(', ')
              }
            </p>
          </div>
          <div className="col-6 pl-3">
            <RenderMovieNote id={movie.id} {...rest} />
          </div>
        </div>
      </div>
    </div>
  )
}
