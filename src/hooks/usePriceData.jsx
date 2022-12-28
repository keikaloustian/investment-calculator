import { useState, useEffect } from "react";

export default function usePriceData(symbol, exchange) {
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch(`/.netlify/functions/apiPrice?symbol=${symbol}&exchange=${exchange}`)
      .then((response) => response.json())
      .then((parsed) => {
        console.log(parsed);
        setPrice(parsed.price);
      });
  }, []);

  return { price };
}
