import React from "react";
import Movie from "../components/MovieCard";
import Movies from "./LandingPage";

function ResultPage({searchResults}) {
  return (
    <div className="container-app">
      <div className="container-movie">
        <div className="wrapper-movie">
          {searchResults ? (
            searchResults.map((movieData, i) => {
              return <Movie movieData={movieData} key={i} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
