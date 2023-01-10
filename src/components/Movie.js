import React from "react";

function Movie({title}) {
  return (
    <div className="card-movie">
      <div className="title-text">{title}</div>
    </div>
  );
}

export default Movie;
