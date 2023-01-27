export default function displayPrice(price, loader) {
  if (!price) {
    return loader;
  }
  if (price === "unavailable") {
    return "unavailable";
  }
  return price.toFixed(2);
}
