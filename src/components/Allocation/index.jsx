import { useState } from "react";
import AssetList from "./AssetList";
import SearchBar from "./SearchBar";

export default function Allocation() {
  const [assets, setAssets] = useState([0, 1, 2]);

  const addAsset = (newAsset) => {
    setAssets([...assets, newAsset]);
  };

  return (
    <section>
      <h1>What do you want to invest in?</h1>
      <SearchBar></SearchBar>
      <button onClick={() => addAsset("test")}>Add</button>
      <AssetList>{assets}</AssetList>
    </section>
  );
}
