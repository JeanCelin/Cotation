import React, { useEffect, useState } from "react";
import axios from "axios";

import "./APIcoins.css";
import APImath from "./APImath.jsx";

export default function ApiCodes() {
  const coinsNameURL = import.meta.env.VITE_API_COINS_NAME;
  const [data, setData] = useState({});
  const [coinNames, setCoinNames] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(
    "Dólar Americano/Real Brasileiro"
  );
  const [codeSelectedCoin, setCodeSelectedCoin] = useState("USD-BRL");
  const [showList, setShowList] = useState(false);
  const [userCoinName, setUserCoinName] = useState(selectedCoin);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const response = await axios.get(coinsNameURL);
        const data = response.data;
        const coins = Object.values(data);
        setData(data);
        setCoinNames(coins);
        setFilteredCoins(coins);
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

  useEffect(() => {
    setUserCoinName(selectedCoin);
  }, [selectedCoin]);

  const handleSelectedCoin = (coin) => {
    setSelectedCoin(coin);
    setUserCoinName(coin);
    setShowList(false);
  };

  const handleCoinName = (e) => {
    setShowList(true);
    const value = e.target.value;
    setUserCoinName(value);
    setFilteredCoins(
      coinNames.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  const handleCleanButton = () => {
    setUserCoinName("");
  };

  const findKeyByValue = (value) => {
    const key = Object.keys(data).find((key) => data[key] === value);
    setCodeSelectedCoin(key);
  };

  return (
    <>
      <div className="containerNames">
        <div className="names">
          <input
            className="coinName"
            value={userCoinName}
            onChange={handleCoinName}
            onClick={() => {
              setShowList(!showList);
            }}
          />
          <div className="clean" onClick={handleCleanButton}>
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>
        {showList && (
          <div className="listContainer">
            <ul className="list">
              <li disabled hidden>
                Select a currency
              </li>
              {filteredCoins.map((item, index) => (
                <li key={index} onClick={() => handleSelectedCoin(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <APImath code={codeSelectedCoin} />
    </>
  );
}
