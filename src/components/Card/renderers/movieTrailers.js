import React from 'react'
import './movieTrailers.css'

export const movieTrailers = ({ videos }) => {
  const { results } = videos || { results: {}}
  if (!results) return null
  const isMany = results.length > 1

  return results.length > 0 && (
    <div>
      <h2>Watch Trailer{isMany && 's'}</h2>
      <div id="carouselMovie" className="carousel slide" data-interval="false">
        <div className="carousel-inner">
          {

            results.map((result, index) => {
              return <div key={`movie-index-${index}`} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                <iframe className="youtube-player" type="text/html" width="100%" height="500" src={`https://www.youtube.com/embed/${result.key}`} frameBorder="0" />
              </div>
            })
          }
        </div>
        {
          isMany &&
          <div className="carousel-control">
            <a className="carousel-control-prev" href="#carouselMovie" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselMovie" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        }
      </div>
    </div>
  )
}