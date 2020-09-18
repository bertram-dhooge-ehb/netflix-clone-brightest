import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import Detail from "./Detail";

const base_url = "https://image.tmdb.org/t/p/original/";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    movieTrailer((movie?.name ? movie.name : movie.title) || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        if (urlParams.get("v") === trailerUrl) {
          setTrailerUrl("");
        } else {
          setTrailerUrl(urlParams.get("v"));
        }
      })
      .catch((error) => console.log(error));
    if (selectedMovie === movie) {
      setSelectedMovie("");
    } else {
      setSelectedMovie(movie);
    }
    console.log(selectedMovie);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* {{selectedMovie && <Detail movie={selectedMovie}/>}} */}
    </div>
  );
}

export default Row;
