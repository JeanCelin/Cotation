import React, { useEffect, useState } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverter(props) {
  const [isUpdatingCurrency1, setIsUpdatingCurrency1] = useState(false);
  const [isUpdatingCurrency2, setIsUpdatingCurrency2] = useState(false);

  const calculateCurrency1 = (amount, rate) => amount * rate;
  const calculateCurrency2 = (amount, rate) => amount / rate;

  const handleCurrency1Change = (e) => {
    props.setCurrency1Amount(e.target.value);
    setIsUpdatingCurrency1(true);
  };

  const handleCurrency2Change = (e) => {
    props.setCurrency2Amount(e.target.value);
    setIsUpdatingCurrency2(true);
  };

  useEffect(() => {
    if (isUpdatingCurrency1 && !isNaN(props.currency1Amount)) {
      const result = calculateCurrency1(
        props.currency1Amount,
        props.exchangeRate
      ).toFixed(2);
      props.setCurrency2Amount(result);
      setIsUpdatingCurrency1(false);
    }
  }, [props.currency1Amount, props.exchangeRate, isUpdatingCurrency1]);

  useEffect(() => {
    if (isUpdatingCurrency2 && !isNaN(props.currency2Amount)) {
      const result = calculateCurrency2(
        props.currency2Amount,
        props.exchangeRate
      ).toFixed(2);
      props.setCurrency1Amount(result);
      setIsUpdatingCurrency2(false);
    }
  }, [props.currency2Amount, props.exchangeRate, isUpdatingCurrency2]);

  return (
    <div className="dateArea_container">
      <div className="price">
        Price: {`${props.exchangeRate} ${props.currencyCode}`}
      </div>
      <div className="conversion_container">
        <div className="conversion">
          <label htmlFor="currency1">{props.currency1Name}</label>
          <input
            className="conversion_input"
            name="currency1"
            type="number"
            onChange={handleCurrency1Change}
            value={props.currency1Amount}
          />
        </div>
        <div className="conversion">
          <label htmlFor="currency2">{props.currency2Name}</label>
          <input
            className="conversion_input"
            name="currency2"
            type="number"
            onChange={handleCurrency2Change}
            value={props.currency2Amount}
          />
        </div>
      </div>
    </div>
  );
}
