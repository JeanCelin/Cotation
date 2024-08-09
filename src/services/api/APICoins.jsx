import { useEffect } from "react";
import axios from "axios";

export default function APICoins({ handleCoinsData }) {
  const apiURL = import.meta.env.VITE_API_COINS_NAME;

  useEffect(() => {
    const fetchCoinNames = async () => {
      try {
        const response = await axios.get(apiURL);
        const data = response.data;

        if (typeof handleCoinsData === "function") {
          handleCoinsData(data);
        }
      } catch (error) {
        console.error("Error fetching the codes:", error);
      }
    };
    fetchCoinNames();
  }, [apiURL]);

  return null;
}
