import Head from "next/head";

import stl from "./Index.module.scss";

const App = () => {
  return (
    <div className={stl.app}>
      <Head>
        <title>Netslix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Hello Netslix 🚀 </h1>
    </div>
  );
};

export default App;
