import { useState } from "react";
import AssetCard from "./AssetCard";
import "./AssetList.scss";
import deletionHandler from "../../helpers/deletionHandler";

export default function AssetList({ assets, setAssets, amount }) {
  // State to manage remaining percent of funds to allocate
  const [remainder, setRemainder] = useState(100);

  return (
    <>
      <p className="remainder-msg">
        You have <b>{remainder}%</b> of ${amount} remaining
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
            deletionHandler={() => deletionHandler(index, assets, setAssets)}
          ></AssetCard>
        ))}
      </ul>
    </>
  );
}
