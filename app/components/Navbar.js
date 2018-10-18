import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div class='nav-item'>
        <img alt='logo' src='https://mail.google.com/mail/u/0?ui=2&ik=c9ff5a45f4&attid=0.1&permmsgid=msg-a:r-1517690719220798973&th=166877727695626b&view=att&disp=safe&realattid=1668758a124d3a8ab511' ></img>
        <h3>InterGalactic Education Council Accreditation</h3>
        </div>
        <div class='nav-item'>
        <NavLink href='#' to='/campuses'>Campuses</NavLink>
        </div>
        <div class='nav-item'>
        <NavLink href='#' to='/students'>Students</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
