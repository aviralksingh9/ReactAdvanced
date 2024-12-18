import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);
  const [inputCount, setInputCount] = useState("");
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const inputCountChange = () => {
    setCount(count + inputCount);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    if (value !== "" || !isNaN(value)) {
      setInputCount(Number(value));
    }
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter: {count}</h2>
      <div style={{ display: "flex", justifyContent:"center" }}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input
        type="text"
        value={inputCount}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button onClick={inputCountChange}>Submit</button>
    </>
  );
};

export default Counter;
