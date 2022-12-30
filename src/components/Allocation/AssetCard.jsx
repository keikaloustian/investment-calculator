import { useState } from "react";
import useApiPrice from "../../hooks/useApiPrice";

export default function AssetCard({ data }) {
  const { price, error } = useApiPrice(data.symbol, data.exchange);
  const [allocation, setAllocation] = useState(0);

  const handleSlider = (event) => {
    setAllocation(event.target.value);
  };

  return (
    <li>
      <span>SYMBOL {data.symbol} </span>
      <span>{data["instrument_name"]}</span>
      <span>EXCHANGE: {data.exchange} </span>
      <span>PRICE: {price ? price : "loading..."}</span>
      <label>
        Allocation (%)
        {allocation}
        <input
          type={"range"}
          min={0}
          max={100}
          value={allocation}
          onChange={handleSlider}
        />
      </label>
      {error && <span>{error}</span>}
    </li>
  );
}
