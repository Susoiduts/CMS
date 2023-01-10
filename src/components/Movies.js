import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

function Movies() {
  //fetch test

  const [moviesCont, setMoviesCont] = useState([]);

  const SPACE_ID = "62lmtlm7lbg7";
  const ACCESS_TOKEN = "QR3HFbCqEVnm8I_KfCCS26hgoKPvKUkO_zd2RJ3jG7Q";

  //link will retrieve a list of all entries in the dedault environment of the specified space
  const URI = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`;

  useEffect(() => {
    axios.get(URI).then((response) => {
      //saving array of movie information containinig objects
      setMoviesCont(response.data.items);
    });
  }, []);



  
  return (
    <div className="container-movie">
      <div className="wrapper-movie">
        {moviesCont ? (
          moviesCont.map((movieData, i) => {
            return <Movie movieData={movieData} key={i}/>;
          })

        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Movies;
