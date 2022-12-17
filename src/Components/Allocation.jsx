import { useState } from "react";
import Asset from "./Assets";

export default function Allocation() {
  // const assets = [0, 1, 2];
  const [assets, setAssets] = useState([]);

  const addAsset = (newAsset) => {
    setAssets([...assets, newAsset]);
  };

  return (
    <section>
      <h1>What do you want to invest in?</h1>
      {assets.map((a) => (
        <Asset>{a}</Asset>
      ))}
      <button onClick={() => addAsset("test")}>Add</button>
    </section>
  );
}
