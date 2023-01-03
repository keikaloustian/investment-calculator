import { useState, useContext } from "react";
import useApiPrice from "../../hooks/useApiPrice";
import { AllocationContext } from "./AssetList";
import handleSlider from "../../helpers/handleSlider";

export default function AssetCard({ data }) {
  const { price, error } = useApiPrice(data.symbol, data.country);
  const [value, setSliderValue] = useState(0);

  // Access AllocationContext provided by AssetList
  const { remainder, setRemainder } = useContext(AllocationContext);

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
              onInput={(event) =>
                handleSlider(
                  event,
                  value,
                  remainder,
                  setRemainder,
                  setSliderValue
                )
              }
            />
          </div>
        </label>
      </div>
      {error && <p>{error}</p>}
    </li>
  );
}
