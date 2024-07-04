import React, { useEffect, useState } from "react";
import axios from "axios";

import "./APIcoins.css";
import APImath from "./APImath";

export default function ApiCodes() {
  const coinsNameURL = import.meta.env.VITE_API_COINS_NAME;
  const [data, setData] = useState({});
  const [coinName, setCoinName] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(
    "Dólar Americano/Real Brasileiro"
  );
  const [codeSelectedCoin, setCodeSelectedCoin] = useState("USD-BRL");

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const response = await axios.get(coinsNameURL);
        const data = response.data;
        const coins = Object.values(data);

        const listCoins = coins.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
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

  const handleSelectedCoin = (e) => {
    setSelectedCoin(e.target.value);
  };

  const findKeyByValue = (value) => {
    const key = Object.keys(data).find((key) => data[key] === value);
    setCodeSelectedCoin(key);
  };
  return (
    <>
      <div className="listCoins">
        <select onChange={handleSelectedCoin} value={selectedCoin}>
          <option disabled hidden value="">
            Select a currency
          </option>
          {coinName}
        </select>
      </div>
      <APImath code={codeSelectedCoin} />
    </>
  );
}
