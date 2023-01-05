import React, {useState, useEffect} from 'react'
import axios from "axios"

function Movie() {


 //fetch test
  
  
 
 const [movies, setMovies] = useState([]);

  
  const URI ="https://cdn.contentful.com/spaces/62lmtlm7lbg7/environments/master/entries/3tGNkeWARE1GtRZEBt7SYC?access_token=QR3HFbCqEVnm8I_KfCCS26hgoKPvKUkO_zd2RJ3jG7Q"
  
  
 useEffect(() => {
   axios.get(URI).then((response) => {
     console.log(response.data);
     let data = response.data.fields;
    
     setMovies(data)
     })
 }, [])


  

 


  return (
    <div className='container-movie'>

      <div className='wrapper-movie'>

       


          <div className='card-movie' key={movies.sys}>
          <div className='title-text'>picture </div>
          <div className='title-text'>{movies.title}</div>
          <div className='title-text'>Duration: {movies.duration}</div>
        </div>





        
        <div className='card-movie'>
          <div className='title-text'>MoViE TITLE</div>
        </div>
        <div className='card-movie'>
          <div className='title-text'>MoViE TITLE</div>
        </div>
        <div className='card-movie'>
          <div className='title-text'>MoViE TITLE</div>
        </div>
        
        <div className='card-movie'>
          <div className='title-text'>MoViE TITLE</div>
        </div>
        <div className='card-movie'>
          <div className='title-text'>MoViE TITLE</div>
        </div>
        <div className='card-movie'>
          <div className='title-text'>MoViE TITLE</div>
        </div>
        <div className='card-movie'>
          <div className='title-text'>MoViE TITLE</div>
        </div>

      </div>

      <div className='container-detail'>

        <div className='detail-header'></div>



      </div>



    </div>
  )
}

export default Movie