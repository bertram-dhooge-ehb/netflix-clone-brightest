import React, { useState, useEffect } from "react";
import axios from "./axios";
import Detail from "./Detail";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function GalleryItem({ movieId }) {
  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

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
      onClick={handleClick}
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
      <h1 style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      {show && <Detail trailerUrl={null} movie={movie}></Detail>}
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
