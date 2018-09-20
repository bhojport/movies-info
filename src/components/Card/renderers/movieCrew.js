import React from 'react'

export const movieCrew = ({crew, id}) => {
  // @TODO:
  // OUCH, there's bug in the api currently, movie credits are not matching
  return (
    <dl>
      <dt>Director, Writer</dt>
      <dd>Shane Black</dd>
      <dt>Writer</dt>
      <dd>Fred Dekker</dd>
    </dl>
  )
}