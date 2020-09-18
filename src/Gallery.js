import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import GalleryItem from "./GalleryItem";

function Gallery() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchComedyMovies);
      let tempMovies = request.data.results;

      for (let i = tempMovies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempMovies[i], tempMovies[j]] = [tempMovies[j], tempMovies[i]];
      }

      setMovies(tempMovies.slice(0, 5));
    }
    fetchData();
  }, []);

  return (
    <div>
      <AliceCarousel buttonsDisabled={true}>
        {movies.map((movie) => (
          <GalleryItem key={movie.id} movieId={movie.id}></GalleryItem>
        ))}
      </AliceCarousel>
    </div>
  );
}

export default Gallery;
