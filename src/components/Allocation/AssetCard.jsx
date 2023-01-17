import { useState, useContext } from "react";
import useApiPrice from "../../hooks/useApiPrice";
import { AllocationContext } from "./AssetList";
import handleSlider from "../../helpers/handleSlider";
import "./AssetCard.scss";

export default function AssetCard({ data, amount }) {
  const { price, error } = useApiPrice(data.symbol, data.country);
  const [sliderValue, setSliderValue] = useState(0);

  // Access AllocationContext provided by AssetList
  const { remainder, setRemainder } = useContext(AllocationContext);

  return (
    <li className="asset-card">
      <span className="asset-card__ticker">
        <b>{data.symbol}</b>
      </span>
      <span className="asset-card__exchange">({data.exchange})</span>
      <span className="asset-card__instrument">{data["instrument_name"]}</span>
      <span>Price: </span>
      <span>{price ? price : "loading..."}</span>
      <div>
        <label>
          Allocation (%)
          {sliderValue}
          <input
            type={"range"}
            min={0}
            max={100}
            value={sliderValue}
            onInput={(event) =>
              handleSlider(
                event,
                sliderValue,
                remainder,
                setRemainder,
                setSliderValue
              )
            }
          />
        </label>
        <span>Shares:</span>
        {price && (
          <span>
            {Math.floor((amount * (sliderValue / 100)) / Number(price))}
          </span>
        )}
      </div>
      {error && <p>{error}</p>}
    </li>
  );
}
