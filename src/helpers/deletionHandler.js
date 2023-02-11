export default function deletionHandler(index, assets, setAssets) {
  // Assemble new assets array without the one being deleted
  const newAssets = [...assets];
  newAssets.splice(index, 1);

  // Update assets state with new array
  setAssets(newAssets);
}
