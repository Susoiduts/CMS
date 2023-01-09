import React from 'react'
import Header from "../components/Header"
import Movies from "../components/Movies"


function Home() {
    return (
     
        <div className='container-app'>
        <Header /> 
        <Movies/>
        </div>
  )
}

export default Home