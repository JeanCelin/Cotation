import React, { useEffect, useState } from "react";
import axios from "axios";

import "./APIcoins.css";
import APImath from "./APImath.jsx";

export default function ApiCodes() {
  const coinsNameURL = import.meta.env.VITE_API_COINS_NAME;
  const [data, setData] = useState({});
  const [coinName, setCoinName] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(
    "Dólar Americano/Real Brasileiro"
  );
  const [codeSelectedCoin, setCodeSelectedCoin] = useState("USD-BRL");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const response = await axios.get(coinsNameURL);
        const data = response.data;
        const coins = Object.values(data);
        const listCoins = coins.map((item, index) => (
          <li key={index} onClick={() => handleSelectedCoin(item)}>
            {item}
          </li>
        ));
        setData(data);
        setCoinName(listCoins);
      } catch (error) {
        console.error("Error fetching the codes:", error);
      }
    };
    fetchCodes();
  }, [coinsNameURL]);

  useEffect(() => {
    if (selectedCoin !== "") {
      findKeyByValue(selectedCoin);
    }
  }, [selectedCoin]);

  const handleSelectedCoin = (coin) => {
    setSelectedCoin(coin);
    setShowList(false);
  };

  const findKeyByValue = (value) => {
    const key = Object.keys(data).find((key) => data[key] === value);
    setCodeSelectedCoin(key);
  };

  return (
    <>
      <div className="containerNames">
        <input
          className="coinName"
          value={selectedCoin}
          onClick={() => {
            setShowList(!showList);
          }}></input>
        {showList && (
          <div className="listContainer">
            <ul className="list">
              <li disabled hidden>
                Select a currency
              </li>
              {coinName}
            </ul>
          </div>
        )}
      </div>
      <APImath code={codeSelectedCoin} />
    </>
  );
}
