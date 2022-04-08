import Head from "next/head";

import Row from "../src/components/row";

import requests from "../src/request-functions/request";

import stl from "./Index.module.scss";

const App = () => {
  return (
    <div className={stl.app}>
      <Head>
        <title>Netslix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Hello Netslix 🚀 </h1>
      {console.log(
        `https://api.themoviedb.org/3${requests.fetchNetflixOrignals}`
      )}
      <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOrignals} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTopRated} />
    </div>
  );
};

export default App;
