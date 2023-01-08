import { useState } from "react";
import "./Contribution.scss";

export default function Contribution({ amount, setAmount }) {
  return (
    <section className="contribution">
      <h1 className="contribution__heading">How much do you want to invest?</h1>
      <div className="button__group">
        <button className="button button--left" onClick={() => setAmount(100)}>
          $100
        </button>
        <button className="button" onClick={() => setAmount(500)}>
          $500
        </button>
        <button
          className="button button--right"
          onClick={() => setAmount(1000)}
        >
          $1000
        </button>
      </div>

      <div className="input">
        <div className="input input__adornment">$</div>
        <input
          type={"number"}
          min={0}
          step={100}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button className="button button--allocate">Allocate</button>
      </div>
    </section>
  );
}
