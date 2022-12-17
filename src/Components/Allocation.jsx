export default function Allocation() {
  const assets = [0, 1, 2];

  return (
    <>
      {assets.map((a) => (
        <p>{a}</p>
      ))}
    </>
  );
}
