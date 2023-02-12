export default function revertRemainder(sliderValue, remainder, setRemainder) {
  const newRemainder = sliderValue + remainder;
  setRemainder(newRemainder);
}
