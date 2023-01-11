import React, { useState, useEffect } from "react";
import { createClient } from "contentful"
import Movie from "./Movie";


function Movies() {
  const [moviesCont, setMoviesCont] = useState([]);
  const client = createClient({ space: "62lmtlm7lbg7", accessToken: "QR3HFbCqEVnm8I_KfCCS26hgoKPvKUkO_zd2RJ3jG7Q" })

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setMoviesCont(entries.items)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries()
  }, [])



  
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
