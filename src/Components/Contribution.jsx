import { useState } from "react";

export default function Contribution() {
  const [amount, setAmount] = useState();

  return (
    <section>
      <h1>How much do you want to invest?</h1>
      <button onClick={() => setAmount(100)}>$100</button>
      <button onClick={() => setAmount(500)}>$500</button>
      <button onClick={() => setAmount(1000)}>$1000</button>

      <div>
        <div className="adornment">$</div>
        <input
          type={"number"}
          min={0}
          step={100}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </div>
    </section>
  );
}
