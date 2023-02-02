import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import useTickerTape from "./hooks/useTickerTape";

import Allocation from "./components/Allocation";
import Contribution from "./components/Contribution";

function App() {
  const [amount, setAmount] = useState(1000);
  // State to show/hide allocation section
  const [allocationVisible, setAllocationVisible] = useState(true);

  // Hook to initialize ticker tape widget
  useTickerTape();

  return (
    <>
      <main>
        <div className="finage-ticker-tape-item"> </div>

        <Contribution
          amount={amount}
          setAmount={setAmount}
          setAllocationVisible={setAllocationVisible}
        ></Contribution>

        {allocationVisible && <Allocation amount={amount}></Allocation>}
      </main>
    </>
  );
}

export default App;
