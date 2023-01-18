import { useState } from "react";
import "./Contribution.scss";

export default function Contribution({ amount, setAmount }) {
  return (
    <section className="contribution">
      <h1 className="contribution__heading">How much do you want to invest?</h1>
      <div className="split">
        <div className="button-group">
          <button className="button--left" onClick={() => setAmount(100)}>
            $100
          </button>
          <button className="button--middle" onClick={() => setAmount(500)}>
            $500
          </button>
          <button className="button--right" onClick={() => setAmount(1000)}>
            $1000
          </button>
        </div>
        <div className="input-group">
          <span className="input-group__adornment">$</span>
          <input
            className="input-group__input"
            type={"number"}
            min={0}
            step={100}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
          {/* <button className="button--allocate">Allocate</button> */}
        </div>
      </div>
    </section>
  );
}
