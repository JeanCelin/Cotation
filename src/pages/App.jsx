import React from "react";
import "./App.css";
import Header from "../components/Header.jsx";
import ConversionArea from "../components/ConversionArea.jsx";

function App() {
  return (
    <div className="main-container">
      <header className="main-header">
        <Header />
      </header>
      <section className="main-section">
        <ConversionArea />
      </section>
      <p className="main-warning">
        *The page serves only as a demonstration of API consumption. Note that
        the page relies on a third-party API, so the presented data may be
        outdated or incorrect. We do not take responsibility for any information
        extracted from this site.
      </p>
    </div>
  );
}

export default App;
