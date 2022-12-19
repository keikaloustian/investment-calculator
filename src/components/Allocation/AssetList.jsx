import AssetCard from "./AssetCard";

export default function AssetList(props) {
  return (
    <ul>
      {props.children.map((a) => (
        <AssetCard>{a}</AssetCard>
      ))}
    </ul>
  );
}
