import { useState, useEffect } from "react";

export default function usePriceData(symbol, exchange) {
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/.netlify/functions/apiPrice?symbol=${symbol}&exchange=${exchange}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Unable to retrieve price (status ${response.status} - ${response.statusText})`
          );
        }
        return response.json();
      })
      .then((parsed) => {
        setPrice(parsed.price);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return { price, error };
}
