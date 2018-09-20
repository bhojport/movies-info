import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const LeftNav = () => {
  return (
    <ul className="nav flex-column mt-5 position-fixed">
      {/* Ah, couldn't find api link for new release, coming soon */}
      {/* <li className="nav-item my-3 pl-4 py-1">
        <NavLink className="text-light" to="/new-releases">New Releases</NavLink>
      </li> */}
      {/* @TODO: fetch trending movies */}
      <li className="nav-item my-3 pl-4 py-1">
        <NavLink className="text-light" to="/trending">Trending</NavLink>
      </li>
      {/* <li className="nav-item my-3 pl-4 py-1">
        <NavLink className="text-light" to="/coming-soon">Coming Soon</NavLink>
      </li> */}
    </ul>
  )
}

export default LeftNav