export default function Contribution() {
  return (
    <>
      <h1>How much do you want to invest?</h1>
      <input type={"number"} min={1} step={50}></input>
    </>
  );
}
