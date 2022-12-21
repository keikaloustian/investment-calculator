import AssetCard from "./AssetCard";

export default function AssetList(props) {
  // List of asset cards
  return (
    <ul>
      <li>{props.amount}</li>
      {props.assets.map((a) => (
        <AssetCard asset={a}></AssetCard>
      ))}
    </ul>
  );
}
