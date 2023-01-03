import { useState } from "react";
import "./App.scss";

import Allocation from "./components/Allocation";
import Contribution from "./components/Contribution";

function App() {
  const [amount, setAmount] = useState(100);
  return (
    <>
      <main>
        <Contribution amount={amount} setAmount={setAmount}></Contribution>
        <Allocation amount={amount}></Allocation>
      </main>
    </>
  );
}

export default App;
