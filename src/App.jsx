import React from "react";

import "./App.css";
import APIcoins from "./api/APIcoins.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="mainContainer">
      <div>
        <Header />
      </div>
      <div>
        <APIcoins />
      </div>
    </div>
  );
}

export default App;
