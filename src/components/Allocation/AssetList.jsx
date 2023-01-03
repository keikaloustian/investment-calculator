import { createContext, useState } from "react";
import AssetCard from "./AssetCard";

export const AllocationContext = createContext();

export default function AssetList({ assets, setAssets, amount }) {
  // State and context to manage the allocation of funds onto the assets
  const [remainder, setRemainder] = useState(100);

  return (
    // Provider that gives access to the remainder % of contribution be allocated
    <AllocationContext.Provider value={{ remainder, setRemainder }}>
      <p>amount {amount}</p> {/* To be deleted*/}
      <p>remainder % {remainder}</p> {/* To be deleted*/}
      {/* List of asset cards */}
      <ul>
        {assets.map((asset, index) => (
          <AssetCard data={asset.value} key={index}></AssetCard>
        ))}
      </ul>
    </AllocationContext.Provider>
  );
}
