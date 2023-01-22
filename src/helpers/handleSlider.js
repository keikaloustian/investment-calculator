export default function handleSlider(
  event,
  sliderValue,
  setSliderValue,
  remainder,
  setRemainder
) {
  // Convert the value of the input of type range from string to number
  const newValue = Number(event.target.value);

  // Handle increase (slide to right)
  if (newValue > sliderValue) {
    if (remainder > 0) {
      setRemainder((prev) => prev - (newValue - sliderValue));
      setSliderValue(newValue);
    }
  }
  // Handle decrease (slide to left)
  if (newValue < sliderValue) {
    setSliderValue(newValue);
    setRemainder((prev) => prev + (sliderValue - newValue));
  }
}
