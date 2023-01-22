import { useState } from "react";
import useApiPrice from "../../hooks/useApiPrice";
import handleSlider from "../../helpers/handleSlider";
import "./AssetCard.scss";

export default function AssetCard({ data, amount, remainder, setRemainder }) {
  const { price, error } = useApiPrice(data.symbol, data.country);
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <li className="asset-card">
      <span className="asset-card__ticker">
        <b>{data.symbol}</b>
      </span>

      <span className="asset-card__exchange">({data.exchange})</span>

      <span className="asset-card__instrument">{data["instrument_name"]}</span>

      <span className="price__label">Price: </span>

      <span className="price__price">{price ? price : "loading..."}</span>

      <label
        className="allocation__label"
        htmlFor={`${data["instrument_name"]}`}
      >
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
            setSliderValue,
            remainder,
            setRemainder
          )
        }
      />

      <span className="shares__label">Shares:</span>
      <span className="shares__shares">
        {price && Math.floor((amount * (sliderValue / 100)) / Number(price))}
      </span>

      {error && <p>{error}</p>}
    </li>
  );
}
