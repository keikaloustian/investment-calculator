export default function AssetCard(props) {
  return (
    <li>
      <span>{props.children}</span>
      <span>TICK</span>
      <span>$3.12</span>
    </li>
  );
}
