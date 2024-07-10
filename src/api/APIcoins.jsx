import React, { useEffect, useState } from "react";
import axios from "axios";

import "./APIcoins.css";
import APImath from "./APImath.jsx";

export default function APICoins() {
  const apiURL = import.meta.env.VITE_API_COINS_NAME;
  const [coinsData, setCoinsData] = useState({});
  const [coinNames, setCoinNames] = useState([]);
  const [filteredCoinNames, setFilteredCoinNames] = useState([]);
  const [selectedCoinName, setSelectedCoinName] = useState(
    "Dólar Americano/Real Brasileiro"
  );
  const [selectedCoinCode, setSelectedCoinCode] = useState("USD-BRL");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [inputCoinName, setInputCoinName] = useState(selectedCoinName);

  useEffect(() => {
    const fetchCoinNames = async () => {
      try {
        const response = await axios.get(apiURL);
        const data = response.data;
        const coinNames = Object.values(data);
        setCoinsData(data);
        setCoinNames(coinNames);
        setFilteredCoinNames(coinNames);
      } catch (error) {
        console.error("Error fetching the codes:", error);
      }
    };
    fetchCoinNames();
  }, [apiURL]);

  useEffect(() => {
    if (selectedCoinName !== "") {
      updateSelectedCoinCode(selectedCoinName);
    }
  }, [selectedCoinName]);

  useEffect(() => {
    setInputCoinName(selectedCoinName);
  }, [selectedCoinName]);

  const handleCoinSelection = (coinName) => {
    setSelectedCoinName(coinName);
    setInputCoinName(coinName);
    setIsDropdownVisible(false);
  };

  const handleCoinNameChange = (e) => {
    setIsDropdownVisible(true);
    const value = e.target.value;
    setInputCoinName(value);
    setFilteredCoinNames(
      coinNames.filter((coinName) =>
        coinName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleClearInput = () => {
    setInputCoinName("");
  };

  const updateSelectedCoinCode = (coinName) => {
    const coinCode = Object.keys(coinsData).find(
      (key) => coinsData[key] === coinName
    );
    setSelectedCoinCode(coinCode);
  };

  return (
    <>
      <div className="containerNames">
        <div className="names">
          <input
            className="coinName"
            value={inputCoinName}
            onChange={handleCoinNameChange}
            onClick={() => {
              setIsDropdownVisible(!isDropdownVisible);
            }}
          />
          <div className="clean" onClick={handleClearInput}>
            {" "}
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>
        {isDropdownVisible && (
          <div className="listContainer">
            <ul className="list">
              <li disabled hidden>
                Select a currency
              </li>
              {filteredCoinNames.map((coinName, index) => (
                <li key={index} onClick={() => handleCoinSelection(coinName)}>
                  {" "}
                  {coinName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <APImath code={selectedCoinCode} />
    </>
  );
}
