export default function remainderResetter(
  sliderValue,
  remainder,
  setRemainder
) {
  const newRemainder = sliderValue + remainder;
  setRemainder(newRemainder);
}
