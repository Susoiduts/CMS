import React from 'react'
import Header from "../components/Header"
import { Link } from "react-router-dom"
import { useParams } from "react-router";




function Details({moviesCont}) {
  const { id } = useParams();
  const movieData = moviesCont.find((movie) => movie.sys.id === id).fields;

  let Video = `http://${movieData.trailer.fields.file.url}`

  return (

    <div className='container-details'>
     
      <div className='details-frame' >
        <Header />
        
        
        <div className='details-top'>
          <Link className='linkback' to="/">back</Link>
          <div className='details-title'> {movieData.title}</div>
          
          <div className='detail-top-wrapper'>
            <div className='left'> <div className='details-image'> <img src={movieData.pictures.fields.file.url} alt="iamge"></img> </div> </div>
            <div className='right'>
              
              <div className='details-duration'>Duration: {movieData.duration} min</div>
              <div className='details-duration'>Rating: {movieData.rating} </div>
              <div className='details-duration'>Year: {movieData.year} </div>
              <div className='details-actors'>Actors: {movieData.actors}</div>
              <div className='details-abstract'>{movieData.abstract}</div>
             
            </div>
          </div>

          <div className='details-video-text'>Plot</div>
          
          <div className='details-plot'>{movieData.plot}</div>


          <div className='details-video-text'>Trailer</div> 
           <div className='details-video'> 
            <video controls autoPlay={"autoplay"}  src={Video} muted  type="video/mp4">
              
            </video>
          </div>
        
 
        </div>

      </div> 
      
    </div>


    
  )
}

export default Details