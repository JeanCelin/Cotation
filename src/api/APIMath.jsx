import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Api.module.css";

export default function ApiPrice(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const coins = props.completeCode;
  const url = import.meta.env.VITE_API_KEY;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${url}${coins}`);
  //       setData(response.data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  // console.log(data);
  return <div className="container"></div>;
}
