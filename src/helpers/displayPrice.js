export default function displayPrice(price) {
  if (!price) {
    return "loading...";
  }
  if (price === "unavailable") {
    return "unavailable";
  }
  return price.toFixed(2);
}
