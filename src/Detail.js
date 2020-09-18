import React, { useState, useEffect } from "react";
import "./Detail.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function Detail({ trailerUrl, movie }) {
  let title = movie?.name ? movie.name : movie.title;
  let date = movie?.first_air_date ? movie.first_air_date : movie.release_date;
  return (
    // div waar alles inzit
    <div
      className="esset"
      style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* de details zelf*/}
      <div className="details">
        <div id="title" className="big">
          {" "}
          {title}{" "}
        </div>
        <div id="plot" className="big" style={{ overflowY: "scroll" }}>
          {movie.overview}
        </div>
      </div>
    </div>
  );
}

export default Detail;
