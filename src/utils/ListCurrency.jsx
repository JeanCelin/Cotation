import React, { useEffect, useState } from "react";
import APICoins from "../services/api/APICoins";
import APIConverter from "../services/api/APIConverter";
import "./ListCurrency.css";

export default function ListCurrency() {
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
    setFilteredCoinNames(coinNames || []);
  }, [coinNames]);

  useEffect(() => {
    if (selectedCoinName !== "") {
      updateSelectedCoinCode(selectedCoinName);
    }
    setCoinNames(Object.values(coinsData));
  }, [selectedCoinName, coinsData]);

  useEffect(() => {
    setInputCoinName(selectedCoinName);
  }, [selectedCoinName]);

  const handleCoinsData = (data) => {
    setCoinsData(data);
  };

  const handleCoinSelection = (coinName) => {
    setSelectedCoinName(coinName);
    setInputCoinName(coinName);
    setIsDropdownVisible(false);
  };

  const handleCoinNameChange = (e) => {
    const value = e.target.value;
    setInputCoinName(value);
    if (value === "") {
      setFilteredCoinNames(coinNames);
    } else {
      setFilteredCoinNames(
        coinNames.filter((coinName) =>
          coinName.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    setIsDropdownVisible(true);
  };

  const handleClearInput = () => {
    setInputCoinName("");
    setFilteredCoinNames(coinNames);
  };

  const updateSelectedCoinCode = (coinName) => {
    if (coinsData) {
      const coinCode = Object.keys(coinsData).find(
        (key) => coinsData[key] === coinName
      );
      setSelectedCoinCode(coinCode);
    }
  };

  return (
    <>
      <APICoins handleCoinsData={handleCoinsData} />

      <div>
        <div className="currency_list_container">
          <input
            className="list_input"
            value={inputCoinName}
            onChange={handleCoinNameChange}
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          />
          <div className="list_button--clean" onClick={handleClearInput}>
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>
        {isDropdownVisible && (
          <div className="listNames_container">
            <ul className="listNames">
              <li disabled hidden>
                Select a currency
              </li>
              {filteredCoinNames.map((coinName, index) => (
                <li key={index} onClick={() => handleCoinSelection(coinName)}>
                  {coinName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <APIConverter selectedCoinCode={selectedCoinCode} />
    </>
  );
}
