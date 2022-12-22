import { useState } from "react";
import AssetList from "./AssetList";
import SearchBar from "./SearchBar";

export default function Allocation({ amount }) {
  const [assets, setAssets] = useState([]);

  return (
    <section>
      <h1>What do you want to invest in?</h1>
      <SearchBar assets={assets} setAssets={setAssets}></SearchBar>

      <AssetList assets={assets} setAssets={setAssets} amount={amount} />
    </section>
  );
}
