import AssetCard from "./AssetCard";

export default function AssetList(props) {
  return (
    <ul>
      {props.assets.map((a) => (
        <AssetCard asset={a}></AssetCard>
      ))}
    </ul>
  );
}
