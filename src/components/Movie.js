import React, { useState, useEffect } from "react";
import axios from "axios";

function Movie({movieData}) {
  const SPACE_ID = "62lmtlm7lbg7";
  const ACCESS_TOKEN = "QR3HFbCqEVnm8I_KfCCS26hgoKPvKUkO_zd2RJ3jG7Q";
  const imageId=movieData.fields.pictures.sys.id;

  const imageDataUrl = `https://cdn.contentful.com/spaces/${SPACE_ID}/assets/${imageId}?access_token=${ACCESS_TOKEN}`;

  const [imageUrl, setImageUrl] = useState();
  const title=movieData.fields.title
  

  useEffect(() => {

    axios.get(imageDataUrl).then((response) => {
      //saving Image URL
      setImageUrl(response.data.fields.file.url);
      console.log(movieData);
    });
  }, []);

  return (
    <div className="card-movie" style={{ backgroundImage: `url(${imageUrl})` }}>
      
      <div className="title-text">{title}</div>
    </div>
  );
}

export default Movie;
