import { useState } from "react";
import AssetCard from "./AssetCard";
import "./AssetList.scss";

export default function AssetList({ assets, amount }) {
  // State to manage remaining percent of funds to allocate
  const [remainder, setRemainder] = useState(100);

  return (
    <>
      <p className="remainder-msg">
        You have <b>{remainder}%</b> of ${amount} left to allocate
      </p>
      {/* List of asset cards */}
      <ul className="asset-list">
        {assets.map((asset, index) => (
          <AssetCard
            data={asset}
            key={index}
            amount={amount}
            remainder={remainder}
            setRemainder={setRemainder}
          ></AssetCard>
        ))}
      </ul>
    </>
  );
}
