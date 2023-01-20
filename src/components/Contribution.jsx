import "./Contribution.scss";

export default function Contribution({
  amount,
  setAmount,
  setAllocationVisible,
}) {
  // Click handler for Allocate button
  const toggleAllocationVisible = (event) => {
    setAllocationVisible(true);
  };

  return (
    <section className="contribution">
      <h1 className="contribution__heading">How much do you want to invest?</h1>
      <div className="split">
        <div className="button-group">
          <button className="button--left" onClick={() => setAmount(100)}>
            $100
          </button>
          <button className="button--middle" onClick={() => setAmount(500)}>
            $500
          </button>
          <button className="button--right" onClick={() => setAmount(1000)}>
            $1000
          </button>
        </div>
        <form className="input-group">
          <span className="input-group__adornment">$</span>
          <input
            className="input-group__input"
            type={"number"}
            min={0}
            step={100}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            autoFocus
          ></input>
          <button
            className="button--allocate"
            onClick={toggleAllocationVisible}
            type="button"
          >
            Allocate
          </button>
        </form>
      </div>
    </section>
  );
}
