import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import Movie from "../components/MovieCard";
import Header from "../components/Header";

function Home({ moviesCont }) {
  return (
    <div className="container-app">
      <div className="container-movie">
        <Header></Header>
        <div className="wrapper-movie">
          {moviesCont ? (
            moviesCont.map((movieData, i) => {
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

export default Home;
