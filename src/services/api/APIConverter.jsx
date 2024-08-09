import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyConverter from "../../utils/CurrencyConverter";

export default function APIConverter({ selectedCoinCode }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [timeStamp, setTimeStamp] = useState("");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [currencyCode, setCurrencyCode] = useState("");
  const [currency1Name, setCurrency1Name] = useState("");
  const [currency1Amount, setCurrency1Amount] = useState(0);
  const [currency2Name, setCurrency2Name] = useState("");
  const [currency2Amount, setCurrency2Amount] = useState(1);
  const [apiEndpoint, setApiEndpoint] = useState("");

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (selectedCoinCode) {
      const finalURL = `${apiKey}${selectedCoinCode}`;
      setApiEndpoint(finalURL);
    }
  }, [selectedCoinCode]);

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

        const infoDate = () => {
          const date = new Date(exchangeData.timestamp * 1000);
          const year = date.getUTCFullYear();
          const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
          const day = date.getUTCDate().toString().padStart(2, "0");
          const hours = date.getUTCHours().toString().padStart(2, "0");
          const minutes = date.getUTCMinutes().toString().padStart(2, "0");
          const seconds = date.getUTCSeconds().toString().padStart(2, "0");

          return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} GMT`;
        };

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
        setTimeStamp(infoDate());
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
      timeStamp={timeStamp}
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
