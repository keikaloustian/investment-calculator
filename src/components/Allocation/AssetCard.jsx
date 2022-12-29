import usePriceData from "../../hooks/usePriceData";

export default function AssetCard({ data }) {
  const { price, error } = usePriceData(data.symbol, data.exchange);

  return (
    <li>
      <span>SYMBOL {data.symbol} </span>
      <span>{data["instrument_name"]}</span>
      <span>EXCHANGE: {data.exchange} </span>
      <span>PRICE: {price ? price : "loading..."}</span>
      <label>
        Allocation (%)
        <input type={"range"} min={0} max={100} />
      </label>
      {error && <span>{error}</span>}
    </li>
  );
}
