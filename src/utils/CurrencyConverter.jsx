import React, { useEffect, useState } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverter({
  exchangeRate,
  timeStamp,
  currencyCode,
  currency1Name,
  currency1Amount,
  currency2Name,
  currency2Amount,
  setCurrency1Amount,
  setCurrency2Amount,
}) {
  const [isUpdatingCurrency1, setIsUpdatingCurrency1] = useState(false);
  const [isUpdatingCurrency2, setIsUpdatingCurrency2] = useState(false);

  const calculateCurrency1 = (amount, rate) => amount * rate;
  const calculateCurrency2 = (amount, rate) => amount / rate;

  const handleCurrency1Change = (e) => {
    setCurrency1Amount(e.target.value);
    setIsUpdatingCurrency1(true);
  };

  const handleCurrency2Change = (e) => {
    setCurrency2Amount(e.target.value);
    setIsUpdatingCurrency2(true);
  };

  useEffect(() => {
    if (isUpdatingCurrency1 && !isNaN(currency1Amount)) {
      const result = calculateCurrency1(currency1Amount, exchangeRate).toFixed(
        2
      );
      setCurrency2Amount(result);
      setIsUpdatingCurrency1(false);
    }
  }, [currency1Amount, exchangeRate, isUpdatingCurrency1]);

  useEffect(() => {
    if (isUpdatingCurrency2 && !isNaN(currency2Amount)) {
      const result = calculateCurrency2(currency2Amount, exchangeRate).toFixed(
        2
      );
      setCurrency1Amount(result);
      setIsUpdatingCurrency2(false);
    }
  }, [currency2Amount, exchangeRate, isUpdatingCurrency2]);

  return (
    <div className="dateArea_container">
      <div className="price">
        <p className="price-text">Price: {`${exchangeRate} ${currencyCode}`}</p>
        <p className="price-lastUpdade">Last Update: {timeStamp}</p>
      </div>
      <div className="conversion_container">
        <div className="conversion">
          <label htmlFor="currency1">{currency1Name}</label>
          <input
            className="conversion_input"
            name="currency1"
            type="number"
            onChange={handleCurrency1Change}
            value={currency1Amount}
          />
        </div>
        <div className="conversion">
          <label htmlFor="currency2">{currency2Name}</label>
          <input
            className="conversion_input"
            name="currency2"
            type="number"
            onChange={handleCurrency2Change}
            value={currency2Amount}
          />
        </div>
      </div>
    </div>
  );
}
