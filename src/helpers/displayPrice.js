export default function displayPrice(price, error, loader, unavailable) {
  if (!price && !error) {
    return loader;
  }
  if (error) {
    return null;
  }
  if (price === "unavailable") {
    return unavailable;
  }
  return price.toFixed(2);
}
