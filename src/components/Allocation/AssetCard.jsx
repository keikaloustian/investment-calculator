import { useState } from "react";
import useApiPrice from "../../hooks/useApiPrice";
import sliderHandler from "../../helpers/sliderHandler";
import displayPrice from "../../helpers/displayPrice";
import LoadingDots from "./LoadingDots";
import "./AssetCard.scss";
import revertRemainder from "../../helpers/revertRemainder";

import { CgClose } from "react-icons/cg";

export default function AssetCard({
  data,
  amount,
  remainder,
  setRemainder,
  deletionHandler,
}) {
  // Destructure price and error message from custom hook for fetching asset price
  const { price, error } = useApiPrice(
    data.symbol,
    data.country,
    data.instrument_type
  );
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
        {
          // Helper function that determines what to display under price - loader/price/unavailable/nothing
          displayPrice(
            price,
            error,
            <LoadingDots />,
            <b className="price__unavailable">unavailable</b>
          )
        }
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
          sliderHandler(
            event,
            sliderValue,
            setSliderValue,
            remainder,
            setRemainder
          )
        }
        disabled={price === "unavailable" || error}
      />
      <span className="allocation__percent">{`${sliderValue}%`}</span>

      <span className="shares__label">Shares:</span>
      <span className="shares__shares">
        {price &&
          price !== "unavailable" &&
          // Calculate no. of shares based on allocation and round down
          Math.floor((amount * (sliderValue / 100)) / Number(price))}
      </span>

      <span className="asset-card__close">
        <CgClose
          onClick={() => {
            revertRemainder(sliderValue, remainder, setRemainder);
            deletionHandler();
          }}
        ></CgClose>
      </span>

      {error && <p className="price__error">{error}</p>}
    </li>
  );
}
