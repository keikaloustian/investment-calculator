export default function handleSlider(
  event,
  value,
  remainder,
  setRemainder,
  setSliderValue
) {
  // Convert the value of the input of type range from string to number
  const newValue = Number(event.target.value);

  // Handle increase (slide to right)
  if (newValue > value) {
    if (remainder > 0) {
      setRemainder((prev) => prev - (newValue - value));
      setSliderValue(newValue);
    }
  }
  // Handle decrease (slide to left)
  if (newValue < value) {
    setSliderValue(newValue);
    setRemainder((prev) => prev + (value - newValue));
  }
}
