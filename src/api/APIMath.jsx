import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiPrice(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [price, setPrice] = useState(0);
  const [codein, setCodein] = useState("");
  const [coin1, setCoin1] = useState("");
  const [coin1Value, setCoin1Value] = useState(0);
  const [coin2, setCoin2] = useState("");
  const [coin2Value, setCoin2Value] = useState(1);

  const [updatingCoin1, setUpdatingCoin1] = useState(false);
  const [updatingCoin2, setUpdatingCoin2] = useState(false);

  const code = props.code;
  const url = import.meta.env.VITE_API_KEY;
  const completeURL = `${url}${code}`;

  const calc1 = (coin1, price) => coin1 * price;
  const calc2 = (coin2, price) => coin2 / price;

  const handleCoin1 = (e) => {
    setCoin1Value(e.target.value);
    setUpdatingCoin1(true);
  };

  const handleCoin2 = (e) => {
    setCoin2Value(e.target.value);
    setUpdatingCoin2(true);
  };

  useEffect(() => {
    if (updatingCoin1 & !isNaN(coin1Value)) {
      const result = calc1(coin1Value, price).toFixed(2);
      setCoin2Value(result);
      setUpdatingCoin1(false);
    }
  }, [coin1Value, price, updatingCoin1]);

  useEffect(() => {
    if (updatingCoin2 & !isNaN(coin2Value)) {
      const result = calc2(coin2Value, price).toFixed(2);
      setCoin1Value(result);
      setUpdatingCoin2(false);
    }
  }, [coin2Value, price, updatingCoin2]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(completeURL);
        const newCode = Object.keys(response.data)[0];
        const data = response.data[newCode];
        const coins1 = data.name.split("/")[0];
        const coins2 = data.name.split("/")[1];
        const fetchedPrice = Number(data.bid).toFixed(2);
        setPrice(fetchedPrice);
        setCodein(data.codein);
        setCoin1(coins1);
        setCoin2(coins2);
        setCoin1Value(fetchedPrice);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [completeURL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div>Price: {`${price} ${codein}`}</div>
      <div>
        <div>
          <label htmlFor="coin1">{coin1}</label>
          <input
            name="coin1"
            type="number"
            onChange={handleCoin1}
            value={coin1Value}></input>
        </div>
        <div>
          <label htmlFor="coin2">{coin2}</label>
          <input
            name="coin2"
            type="number"
            onChange={handleCoin2}
            value={coin2Value}></input>
        </div>
      </div>
    </div>
  );
}