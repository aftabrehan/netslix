import Head from "next/head";

import Row from "../src/components/row";

import request from "../src/request-functions/request";

import stl from "./Index.module.scss";

const App = () => {
  return (
    <div className={stl.app}>
      <Head>
        <title>Netslix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Hello Netslix 🚀 </h1>
      <Row title="Netflix Orignals" fetchUrl={request.fetchNetflixOrignals} />
      <Row title="Trending Movies" fetchUrl={request.fetchTrendings} />
    </div>
  );
};

export default App;
