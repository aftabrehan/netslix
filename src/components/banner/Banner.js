import React, { useState, useEffect } from "react";

import requests from "../../functions/requests";
import axios from "../../functions/axios";

import stl from "./Banner.module.scss";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      console.log(movie?.backdrop_path);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={stl.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={stl.bannerContents}>
        <h1 className={stl.bannerTitle}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={stl.bannerButtons}>
          <button className={stl.bannerButton}>Play</button>
          <button className={stl.bannerButton}>Add to List</button>
        </div>
        <p className={stl.bannerDescription}>
          {truncate(movie?.overview, 180)}
        </p>
      </div>
      <div className={stl.bannerFadeBottom} />
    </header>
  );
}

export default Banner;
