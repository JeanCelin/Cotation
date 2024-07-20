import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyConverter from "../../utils/CurrencyConverter";

export default function APIConverter(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [exchangeRate, setExchangeRate] = useState(0);
  const [currencyCode, setCurrencyCode] = useState("");
  const [currency1Name, setCurrency1Name] = useState("");
  const [currency1Amount, setCurrency1Amount] = useState(0);
  const [currency2Name, setCurrency2Name] = useState("");
  const [currency2Amount, setCurrency2Amount] = useState(1);
  const [apiEndpoint, setApiEndpoint] = useState("");

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (props.selectedCoinCode) {
      const finalURL = `${apiKey}${props.selectedCoinCode}`;
      setApiEndpoint(finalURL);
    }
  }, [props.selectedCoinCode]);

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
        setCurrency2Amount(1);
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
    <CurrencyConverter
      exchangeRate={exchangeRate}
      currencyCode={currencyCode}
      currency1Name={currency1Name}
      currency1Amount={currency1Amount}
      currency2Name={currency2Name}
      currency2Amount={currency2Amount}
      setCurrency1Amount={setCurrency1Amount}
      setCurrency2Amount={setCurrency2Amount}
    />
  );
}
