import { useState } from "react";
import "./App.scss";

import Allocation from "./components/Allocation";
import Contribution from "./components/Contribution";

function App() {
  const [amount, setAmount] = useState();
  // State to show/hide allocation section
  const [allocationVisible, setAllocationVisible] = useState(false);

  return (
    <>
      <main>
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
