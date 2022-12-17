import { useState } from "react";
import "./App.css";
import Allocation from "./Components/Allocation";
import Contribution from "./Components/Contribution";

function App() {
  return (
    <>
      <main>
        <Contribution></Contribution>
        <Allocation></Allocation>
      </main>
    </>
  );
}

export default App;
