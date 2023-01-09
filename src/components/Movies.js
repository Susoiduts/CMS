import React, { useState, useEffect } from "react";
import axios from "axios";

function Movie() {
  //fetch test

  const [movies, setMovies] = useState([]);

  const SPACE_ID = "62lmtlm7lbg7";
  const ACCESS_TOKEN = "QR3HFbCqEVnm8I_KfCCS26hgoKPvKUkO_zd2RJ3jG7Q";

  //link will retrieve a list of all entries in the dedault environment of the specified space
  const URI = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`;

  useEffect(() => {
    axios.get(URI).then((response) => {
      console.log(response.data);
      let data = response.data.fields;

      setMovies(data);
    });
  }, []);

  return (
    <div className="container-movie">
      <div className="wrapper-movie">
        <Movie />
        <div className="card-movie">
          <div className="title-text">MoViE TITLE</div>
        </div>

        <div className="card-movie">
          <div className="title-text">MoViE TITLE</div>
        </div>
        <div className="card-movie">
          <div className="title-text">MoViE TITLE</div>
        </div>
        <div className="card-movie">
          <div className="title-text">MoViE TITLE</div>
        </div>

        <div className="card-movie">
          <div className="title-text">MoViE TITLE</div>
        </div>
        <div className="card-movie">
          <div className="title-text">MoViE TITLE</div>
        </div>
        <div className="card-movie">
          <div className="title-text">MoViE TITLE</div>
        </div>
        <div className="card-movie">
          <div className="title-text">MoViE TITLE</div>
        </div>
      </div>

      <div className="container-detail">
        <div className="detail-header"></div>
      </div>
    </div>
  );
}

export default Movie;
