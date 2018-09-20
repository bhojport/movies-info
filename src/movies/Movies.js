import React from 'react'
import { ContainerWrapper } from 'components/Wrapper'
import { MoviesContainer } from 'containers'
import { onSearchUtil } from 'utils'

const Movies = () => {
  return (
    <ContainerWrapper onSearch={onSearchUtil}>
      <MoviesContainer />
    </ContainerWrapper>
  )
}


export default Movies