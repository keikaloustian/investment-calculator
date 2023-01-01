import { useState, useContext } from "react";
import useApiPrice from "../../hooks/useApiPrice";
import { AllocationContext } from "./AssetList";

export default function AssetCard({ data }) {
  const { price, error } = useApiPrice(data.symbol, data.exchange);
  const [value, setSliderValue] = useState(0);

  // Access AllocationContext provided by AssetList
  const { remainder, setRemainder } = useContext(AllocationContext);

  const handleSlider = (event) => {
    // Convert the value of the input of type range from string to number
    const newValue = Number(event.target.value);

    // Handle increase (slide to right)
    if (newValue > value) {
      if (remainder > 0) {
        setRemainder((prev) => prev - (newValue - value));
        setSliderValue(newValue);
      }
    }
    // Handle decrease (slide to left)
    if (newValue < value) {
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
              onInput={handleSlider}
            />
          </div>
        </label>
      </div>
      {error && <p>{error}</p>}
    </li>
  );
}
