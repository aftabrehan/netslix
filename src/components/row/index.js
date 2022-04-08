import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// import requests from "../../request-functions/request";
import axios from "../../request-functions/axios";

// import stl from "./Row.module.scss";

const Row = ({ title, fetchUrl, isLarge }) => {
  const { movies, setMovies } = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      // setMovies(request);
      return request;
    }
    // (async function anyNameFunction() {
    //   await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
    // })();
    // console.log(anyNameFunction());

    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div>
      <h2>{title}</h2>
      <div>{/* <img src={axios.baseUrl} alt={movies.name} /> */}</div>
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string,
  fetchUrl: PropTypes.string,
  isLarge: PropTypes.bool,
};

export default Row;
