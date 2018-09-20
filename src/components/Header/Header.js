import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({onSearch}) => {
  return (
    <div className="row bg-info py-3 position-fixed w-100" style={{zIndex: 1}}>
      <div className="col-2">
        <h1><Link className="text-warning nav-link h4" to="/">Movies Info</Link></h1>
      </div>
      <div className="col-10 my-auto">
        <div className="form-group my-auto">
          <input type="text" className="form-control" id="search-input" placeholder="Search movies" onChange={onSearch} />
        </div>
      </div>
    </div>
  )
}

export default Header