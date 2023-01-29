import { useState } from "react";
import useApiPrice from "../../hooks/useApiPrice";
import handleSlider from "../../helpers/handleSlider";
import displayPrice from "../../helpers/displayPrice";
import LoadingDots from "./LoadingDots";
import "./AssetCard.scss";

export default function AssetCard({ data, amount, remainder, setRemainder }) {
  // Destructure price and error message from custom hook for fetching asset price
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

      <span className="price__price">
        {displayPrice(
          price,
          error,
          <LoadingDots />,
          <b className="unavailable">unavailable</b>
        )}
      </span>

      <label
        className="allocation__label"
        htmlFor={`${data["instrument_name"]}`}
      >
        {"Allocation: "}
      </label>

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
        disabled={price === "unavailable"}
      />
      <span className="allocation__percent">{`${sliderValue}%`}</span>

      <span className="shares__label">Shares:</span>
      <span className="shares__shares">
        {price &&
          price !== "unavailable" &&
          Math.floor((amount * (sliderValue / 100)) / Number(price))}
      </span>

      {error && <p>{error}</p>}
    </li>
  );
}
