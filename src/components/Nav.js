import React from 'react'
import { NavLink } from "react-router-dom"




function Nav() {
  return (
      <div className='container-nav'>
          <div className='logo'></div>
          <div className='container-menu'>  <NavLink to='/'>Home</NavLink> <NavLink to='/uuu'>Movies</NavLink> <NavLink to='/trtrtr'>Something else</NavLink> </div>
    </div>
  )
}

export default Nav