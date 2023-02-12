import { useRef } from "react";
import "./Contribution.scss";

import { MdAttachMoney } from "react-icons/md";

export default function Contribution({
  amount,
  setAmount,
  setAllocationVisible,
}) {
  // Click handler for Allocate button
  const toggleAllocationVisible = (event) => {
    event.preventDefault();
    setAllocationVisible(true);
  };

  // Ref for contribution input
  const contributionRef = useRef(null);

  // Function that focuses on contribution input using ref
  const focusContribution = () => {
    contributionRef.current.focus();
  };

  return (
    <section className="contribution">
      <h1 className="contribution__heading">How much do you want to invest?</h1>
      <div className="button-group">
        <button
          className="button--left"
          onClick={() => {
            setAmount(100);
            focusContribution();
          }}
        >
          $100
        </button>
        <button
          className="button--middle"
          onClick={() => {
            setAmount(500);
            focusContribution();
          }}
        >
          $500
        </button>
        <button
          className="button--right"
          onClick={() => {
            setAmount(1000);
            focusContribution();
          }}
        >
          $1000
        </button>
      </div>
      <form className="input-group">
        <div className="contribution-wrapper">
          {/* <span className="input-group__adornment">$</span> */}
          <span className="input-group__adornment">
            <MdAttachMoney></MdAttachMoney>
          </span>
          <input
            ref={contributionRef}
            className="input-group__input"
            type={"number"}
            min={0}
            step={100}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            autoFocus
          ></input>
        </div>
        <button className="button--allocate" onClick={toggleAllocationVisible}>
          Allocate
        </button>
      </form>
    </section>
  );
}
