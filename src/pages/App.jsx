import React from "react";

import "./App.css";
import APIcoins from "../services/api/APICoins.jsx";
import Header from "../components/Header.jsx";
import ConversionArea from "../components/ConversionArea.jsx";

function App() {
  return (
    <div className="mainContainer">
      <div>
        <Header />
      </div>
      <div>
        <ConversionArea />
      </div>
      <div>
        <APIcoins />
      </div>
    </div>
  );
}

export default App;
