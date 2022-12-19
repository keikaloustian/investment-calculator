export default function AssetCard(props) {
  return (
    <li>
      <span>{props.asset.value.API}</span>
      <span>TICK</span>
      <span>$3.12</span>
    </li>
  );
}
