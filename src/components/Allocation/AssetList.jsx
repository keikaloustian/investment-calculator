import { createContext, useState } from "react";
import AssetCard from "./AssetCard";

export default function AssetList({ assets, setAssets, amount }) {
  // State and context to manage the allocation of funds onto the assets
  const [remainder, setRemainder] = useState(100);
  const AllocationContext = createContext();

  return (
    // Provider that gives asset cards access to the remainder to be allocated
    <AllocationContext.Provider value={{ remainder, setRemainder }}>
      <p>amount {amount}</p> {/* To be deleted*/}
      {/* List of asset cards */}
      <ul>
        {assets.map((asset) => (
          <AssetCard
            data={asset.value}
            key={asset.value["instrument_name"]}
          ></AssetCard>
        ))}
      </ul>
    </AllocationContext.Provider>
  );
}
