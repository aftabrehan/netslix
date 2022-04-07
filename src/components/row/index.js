import { useEffect } from "react";
import PropTypes from "prop-types";

// import requests from "../../request-functions/request";
import axios from "../../request-functions/axios";

import stl from "./Row.module.scss";

const Row = ({ title, fetchUrl, isLarge }) => {
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

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
