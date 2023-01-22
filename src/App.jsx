import { useState } from "react";
import "./App.scss";

import Allocation from "./components/Allocation";
import Contribution from "./components/Contribution";

function App() {
  const [amount, setAmount] = useState(1000);
  // State to show/hide allocation section
  const [allocationVisible, setAllocationVisible] = useState(false);

  return (
    <>
      <main>
        <div class="finage-ticker-tape-item"> </div>

        <script
          type="text/javascript"
          src="https://cdn.finage.co.uk/ticker-tape/main.js"
        ></script>
        <script>
          finageTickerTape.symbols(["btcusd:crypto", "eurusd:forex"]);
          finageTickerTape.colors(["",""]);
          finageTickerTape.theme(["dark-night"]); finageTickerTape.initWidget();
        </script>

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
