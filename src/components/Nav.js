import React from 'react'
import { NavLink } from "react-router-dom"
import SearchBar from './SearchBar'




function Nav({setSearchResults}) {
  return (
      <div className='container-nav'>
          <div className='logo'>LOGO</div>
      <div className='container-menu'>  <NavLink to='/'>Home</NavLink> <SearchBar setSearchResults={setSearchResults}/> </div>
      


    </div>
  )
}

export default Nav