import usePriceData from "../../hooks/usePriceData";

export default function AssetCard({ data }) {
  const { price, error } = usePriceData(data.symbol, data.exchange);

  return (
    <li>
      <span>SYMBOL {data.symbol} </span>
      <span>{data["instrument_name"]}</span>
      <span>EXCHANGE: {data.exchange} </span>
      <span>PRICE: {price} </span>
      {error && <span>{error}</span>}
    </li>
  );
}
