import React, { useState, useEffect } from "react";
import axios from "axios";

function Movie({movieData}) {
  const imageUrl = movieData.fields.pictures.fields.file.url;
  const title=movieData.fields.title

  return (
    <div className="card-movie" style={{ backgroundImage: `url(${imageUrl})` }}>
      
      <div className="title-text">{title}</div>
      
    </div>
  );
}

export default Movie;
