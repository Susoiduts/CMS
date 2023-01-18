import React from "react";
import { Link } from 'react-router-dom';


function Movie({movieData}) {
  const imageUrl = movieData.fields.pictures.fields.file.url;
  const title=movieData.fields.title;


  return (
    <Link to={`/details/${movieData.sys.id}`} state={{ data: movieData }}>
    <div className="card-movie" style={{ backgroundImage: `url(${imageUrl})` }}>
      
      <div className="title-text">{title}</div>
      
    </div>
    </Link>
  );
}

export default Movie;
