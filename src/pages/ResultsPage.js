import React from "react";
import Movie from "../components/MovieCard";
import Movies from "./LandingPage";
import Header from "../components/Header"
function ResultPage({searchResults}) {
  return (
    <div className="container-app">
     
      <div className="container-movie">
        <div className="wrapper-movie">
        <Header/>
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
