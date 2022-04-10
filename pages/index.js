import Head from "next/head";

import Nav from "../src/components/nav";
import Row from "../src/components/row";
import Banner from "../src/components/banner";

import requests from "../src/functions/requests";

import stl from "./App.module.scss";

const App = () => {
  return (
    <div className={stl.app}>
      <Head>
        <title>Netslix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Banner />
      <Row isLargeRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
