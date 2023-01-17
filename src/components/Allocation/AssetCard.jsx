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
      <span className="price__label">Price: </span>
      <span className="price__price">{price ? price : "loading..."}</span>
      <label className="allocation__label" for={`${data["instrument_name"]}`}>
        {"Allocation: "}
      </label>
      <span className="allocation__percent">{`${sliderValue}%`}</span>
      <input
        id={`${data["instrument_name"]}`}
        className="allocation__slider"
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
      <span className="shares__label">Shares:</span>
      {price && (
        <span className="shares__shares">
          {Math.floor((amount * (sliderValue / 100)) / Number(price))}
        </span>
      )}
      {error && <p>{error}</p>}
    </li>
  );
}
