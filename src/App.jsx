import { useState } from "react";
import "./App.css";
import Allocation from "./components/Allocation";
import Contribution from "./components/Contribution";

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
