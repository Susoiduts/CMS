import React from 'react'
import Header from "../components/header"
import Movie from "../components/movie"


function home() {
    return (
     
        <div className='container-app'>
        <Header /> 
        <Movie/>
        </div>
  )
}

export default home