export default function AssetCard({ data }) {
  // Card containing ticker symbol, price, etc
  // props. properties depend on shape of fetched data (TBD)
  return (
    <li>
      <span>{data.symbol}</span>
      <span>{data["instrument_name"]}</span>
    </li>
  );
}
