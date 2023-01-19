import { createContext, useState } from "react";
import AssetCard from "./AssetCard";
import "./AssetList.scss";

// Context to manage remaining percent of funds to allocate
export const AllocationContext = createContext();

export default function AssetList({ assets, amount }) {
  // State to manage remaining percent of funds to allocate
  const [remainder, setRemainder] = useState(100);

  return (
    // Provider that gives access to the remainder % of contribution be allocated
    <AllocationContext.Provider value={{ remainder, setRemainder }}>
      {/* <p>amount {amount}</p> */}
      <p className="remainder-msg">
        You have <b>{remainder}%</b> of ${amount} left to allocate
      </p>
      {/* List of asset cards */}
      <ul className="asset-list">
        {assets.map((asset, index) => (
          <AssetCard data={asset.value} key={index} amount={amount}></AssetCard>
        ))}
      </ul>
    </AllocationContext.Provider>
  );
}
