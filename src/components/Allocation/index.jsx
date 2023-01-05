import { useState } from "react";
import AssetList from "./AssetList";
import SearchBar from "./SearchBar";
import "./Allocation.scss";

export default function Allocation({ amount }) {
  const [assets, setAssets] = useState([]);

  return (
    <section id="allocation">
      <h1>What do you want to invest in?</h1>
      <SearchBar assets={assets} setAssets={setAssets}></SearchBar>

      <AssetList assets={assets} setAssets={setAssets} amount={amount} />
    </section>
  );
}
