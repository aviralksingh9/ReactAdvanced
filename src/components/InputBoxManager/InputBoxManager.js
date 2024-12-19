import React, { useState } from "react";
import InputBox from "./InputBox";

const InputBoxManager = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDec = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return (
    <>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      {Array.from({ length: count }).map((_, index) => (
        <InputBox key={index} />
      ))}
      <p>Count: {count}</p>
    </>
  );
};

export default InputBoxManager;
