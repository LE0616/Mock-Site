import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h3>Welcome!</h3>
      <NavLink to='/campuses'>Campuses</NavLink>
      <NavLink to='/students'>Students</NavLink>
    </nav>
  )
}

export default Navbar;
