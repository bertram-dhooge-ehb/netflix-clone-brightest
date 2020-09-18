import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function GalleryItem({ movieId }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      console.log(movieId);
      const request = await axios.get(
        `/movie/${movieId}?api_key=7167231a9918ea52d8aa36da6e5b4086`
      );
      setMovie(request.data);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div
      className="item"
      style={{
        objectFit: "contain",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        width: "500px",
        height: "300px",
        alignContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1 style={{ opacity: ".5" }}>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      {/*<img
        key={movieId}
        className="row_poster"
        src={`${base_url}${movie.poster_path}`}
        alt={movie.name}
      />*/}
    </div>
  );
}

export default GalleryItem;
