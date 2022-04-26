import "./App.css";

import React from "react";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const [calculate, setCalculate] = useState("");

  const [result, setResult] = useState(0);

  function calculateResult(symbol, userInput, currentResult) {
    if (symbol === "toplama") {
      let finalResult = parseInt(userInput) + parseInt(currentResult);
      console.log("jfhahgf" + finalResult)
      setResult(finalResult);
    }
    if (symbol == "çıkarma") {
      let finalResult = parseInt(userInput) - parseInt(currentResult);

      setResult(finalResult);
    }

    if (symbol == "çarpma") {
      let finalResult = parseInt(userInput) * parseInt(currentResult);

      setResult(finalResult);
    }
    if (symbol == "bölme") {
      let finalResult = parseInt(userInput) / parseInt(currentResult);
      setResult(finalResult);
    }

    console.log(symbol, userInput, currentResult)
  }
  console.log(result);

  return (
    <div>
      <Header />
      <div className="main">
        <div>
          <h1>{result}</h1>
          <input
            className="input-2"
            placeholder="sayı girin"
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => calculateResult(calculate, number, result)}
          >
            {" "}
            Cal{" "}
          </button>
          <button className="btn" onClick={() => setCalculate("toplama")}>
            {" "}
            +{" "}
          </button>
          <button className="btn" onClick={() => setCalculate("çıkarma")}>
            {" "}
            -{" "}
          </button>
          <button className="btn" onClick={() => setCalculate("çarpma")}>
            {" "}
            x{" "}
          </button>
          <button className="btn" onClick={() => setCalculate("bölme")}>
            {" "}
            /{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
