import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleOperation = (op) => {
    if (previousValue !== null) {
      calculateResult();
    }
    setOperation(op);
    setPreviousValue(value);
    setValue("");
  };

  const calculateResult = () => {
    if (previousValue === null || value === "") return;
    let calcResult;
    const prev = parseFloat(previousValue);
    const current = parseFloat(value);

    switch (operation) {
      case "+":
        calcResult = prev + current;
        break;
      case "-":
        calcResult = prev - current;
        break;
      case "x":
        calcResult = prev * current;
        break;
      case "/":
        calcResult = current === 0 ? "Error" : prev / current;
        break;
      default:
        return;
    }

    setResult(calcResult);
    setPreviousValue(null);
    setOperation(null);
    setValue("");
  };

  const handleClear = () => {
    setValue("");
    setResult(null);
    setOperation(null);
    setPreviousValue(null);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={value}
        placeholder="Enter a number"
        onChange={handleChange}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("x")}>x</button>
        <button onClick={() => handleOperation("/")}>/</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={calculateResult}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default Calculator;
