import AssetCard from "./AssetCard";

export default function AssetList({ assets, setAssets, amount }) {
  // List of asset cards
  return (
    <>
      <p>amount {amount}</p>
      <ul>
        {assets.map((asset) => (
          <AssetCard
            data={asset.value}
            key={asset.value["instrument_name"]}
          ></AssetCard>
        ))}
      </ul>
    </>
  );
}
