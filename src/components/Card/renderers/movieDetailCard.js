import React from 'react'
import { RenderMovieCrew, RenderMovieNote, RenderMovieTrailers } from './'
export const movieDetailCard = ({ movie, ...rest }) => {
  const { REACT_APP_API_IMAGE_URL: api_image_url } = process.env
  const movieYear = new Date(movie.release_date).getFullYear()

  if (!movie) return null

  return (
    <div className="col">
      <div className="card bg-dark text-white">
        {movie.title && <div className="card-header">{movie.title}</div>}
        <div className="card-body row no-gutters">
          <div className="col-3 pr-4">
            {movie.poster_path && <img className="card-img-top mb-3" src={`${api_image_url}/${movie.poster_path}`} alt={movie.title} />}
          </div>
          <div className="col-9">
            {movie.title && <h1>{`${movie.title} (${movieYear})`}</h1>}
            {movie.tagline && <span className="d-block">{movie.tagline}</span>}
            {
              movie.overview &&
              [<h2 className="mt-4" key={'overview-heading'}>Overview</h2>,
              <p key={'overview-paragraph'}>{movie.overview}</p>]
            }
            {/* 
                we're not rendering movie credits due to bug 
                see todo in components/Card/renderers/movieCrew.js why append_to_response is not used here
            */}
            {movie.credits && <RenderMovieCrew crew={movie.credits.crew} id={movie.id} />}
            <hr />
            {movie.videos && <RenderMovieTrailers videos={movie.videos} />}
            <RenderMovieNote id={movie.id} {...rest} />
          </div>
        </div>
      </div>
    </div>
  )
}