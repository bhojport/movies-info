import React from 'react'
import { Header } from 'components/Header'
import { LeftNav } from 'components/Nav'

const ContainerWrapper = ({children, onSearch}) => {
  return (
    <div className="container-fluid">
      <Header onSearch={onSearch} />
      <div className="row position-relative" style={{ minHeight: 'calc(100vh - 85px)', top: '85px' }}>
        <div className="col-2 bg-dark">
          <LeftNav />
        </div>
        <div className="col-10 bg-secondary">
          <div className="row p-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerWrapper