import { useState } from "react";
import Asset from "../Asset";

export default function Allocation() {
  // const assets = [0, 1, 2];
  const [assets, setAssets] = useState([]);

  const addAsset = (newAsset) => {
    setAssets([...assets, newAsset]);
  };

  return (
    <section>
      <h1>What do you want to invest in?</h1>
      <input></input>
      <button onClick={() => addAsset("test")}>Add</button>
      <ul>
        {assets.map((a) => (
          <Asset>{a}</Asset>
        ))}
      </ul>
    </section>
  );
}
