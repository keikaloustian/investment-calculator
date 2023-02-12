export default function revertRemainder(sliderValue, remainder, setRemainder) {
  if (sliderValue > 0) {
    const newRemainder = sliderValue + remainder;
    setRemainder(newRemainder);
  }
}
