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
    </div>
  );
}

export default App;
