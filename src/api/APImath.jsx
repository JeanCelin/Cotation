import React, { useEffect, useState } from "react";
import axios from "axios";

import "./APImath.css";

export default function APIConverter({ code }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [exchangeRate, setExchangeRate] = useState(0);
  const [currencyCode, setCurrencyCode] = useState("");
  const [currency1Name, setCurrency1Name] = useState("");
  const [currency1Amount, setCurrency1Amount] = useState(0);
  const [currency2Name, setCurrency2Name] = useState("");
  const [currency2Amount, setCurrency2Amount] = useState(1);

  const [isUpdatingCurrency1, setIsUpdatingCurrency1] = useState(false);
  const [isUpdatingCurrency2, setIsUpdatingCurrency2] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState("");

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (code) {
      const finalURL = `${apiKey}${code}`;
      setApiEndpoint(finalURL);
    }
  }, [code]);

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

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        if (!apiEndpoint) {
          return;
        }

        const response = await axios.get(apiEndpoint);
        if (!response.data) {
          throw new Error("Empty response data");
        }

        const exchangeDataKey = Object.keys(response.data)[0];
        const exchangeData = response.data[exchangeDataKey];

        if (
          !exchangeData ||
          !exchangeData.name ||
          typeof exchangeData.name !== "string"
        ) {
          throw new Error(
            "Invalid data format: name property not found or not a string"
          );
        }

        const [currency1, currency2] = exchangeData.name.split("/");
        const fetchedRate = Number(exchangeData.bid).toFixed(2);

        setExchangeRate(fetchedRate);
        setCurrencyCode(exchangeData.codein);
        setCurrency1Name(currency1);
        setCurrency2Name(currency2);
        setCurrency1Amount(fetchedRate);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [apiEndpoint]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="Mathcontainer">
      <div className="price">Price: {`${exchangeRate} ${currencyCode}`}</div>
      <div className="conversionContainer">
        <div className="inputContainer">
          <label htmlFor="currency1">{currency1Name}</label>
          <input
            name="currency1"
            type="number"
            onChange={handleCurrency1Change}
            value={currency1Amount}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="currency2">{currency2Name}</label>
          <input
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
