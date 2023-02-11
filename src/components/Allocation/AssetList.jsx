import { useState } from "react";
import AssetCard from "./AssetCard";
import "./AssetList.scss";

export default function AssetList({ assets, setAssets, amount }) {
  // State to manage remaining percent of funds to allocate
  const [remainder, setRemainder] = useState(100);

  // Handler for asset deletion
  const deletionHandler = (index) => {
    // Assemble new assets array without the one being deleted
    const newAssets = [...assets];
    newAssets.splice(index, 1);

    // Update assets state with new array
    setAssets(newAssets);
  };

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
            deletionHandler={() => deletionHandler(index)}
          ></AssetCard>
        ))}
      </ul>
    </>
  );
}
