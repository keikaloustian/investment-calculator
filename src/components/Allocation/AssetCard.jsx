export default function AssetCard(props) {
  // Card containing ticker symbol, price, etc
  // props. properties depend on shape of fetched data (TBD)
  return (
    <li>
      <span>{props.asset.value.API}</span>
      <span>TICK</span>
      <span>$3.12</span>
    </li>
  );
}
