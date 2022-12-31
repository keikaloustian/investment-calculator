import { useState, useContext } from "react";
import useApiPrice from "../../hooks/useApiPrice";
import { AllocationContext } from "./AssetList";

export default function AssetCard({ data }) {
  const { price, error } = useApiPrice(data.symbol, data.exchange);
  const [value, setSliderValue] = useState(0);
  // Access AllocationContext provided by AssetList
  const { remainder, setRemainder } = useContext(AllocationContext);

  const handleSlider = (event) => {
    const newValue = event.target.value;
    if (newValue > value) {
      if (remainder > 0) {
        setRemainder((prev) => prev - (newValue - value));
        setSliderValue(newValue);
      }
    }
    if (newValue < value) {
      // console.log("-", newValue);
      setSliderValue(newValue);
      setRemainder((prev) => prev + (value - newValue));
    }
  };

  return (
    <li>
      <span>SYMBOL {data.symbol} </span>
      <span>{data["instrument_name"]}</span>
      <span>EXCHANGE: {data.exchange} </span>
      <span>PRICE: {price ? price : "loading..."}</span>
      <div>
        <label>
          Allocation (%)
          {value}
          <div>
            <input
              type={"range"}
              min={0}
              max={100}
              value={value}
              // onChange={handleSlider}
              onInput={handleSlider}
            />
          </div>
        </label>
        <div>{remainder}</div>
      </div>
      {error && <span>{error}</span>}
    </li>
  );
}
