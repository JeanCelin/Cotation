import React from "react";

import "./App.css";
import APIcoins from "./api/APIcoins.jsx";
import Header from "./components/Header.jsx";
import InputArea from "./components/InputArea.jsx";

function App() {
  return (
    <div className="mainContainer">
      <div>
        <Header />
      </div>
      <div>
        <InputArea />
      </div>
      <div>
        <APIcoins />
      </div>
    </div>
  );
}

export default App;
