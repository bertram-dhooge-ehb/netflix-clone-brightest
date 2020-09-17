import React from "react";
import Gallery from "./Gallery";
import Row from "./Row";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Gallery />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
