import React from 'react'
import { NavLink } from "react-router-dom"




function Nav() {
  return (
      <div className='container-nav'>
          <div className='logo'>LOGO</div>
          <div className='container-menu'>  <NavLink to='/'>Home</NavLink>  </div>
    </div>
  )
}

export default Nav