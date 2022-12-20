import { useState } from "react";
import "./App.css";
import Allocation from "./components/Allocation";
import Contribution from "./components/Contribution";

function App() {
  const [amount, setAmount] = useState("");
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
