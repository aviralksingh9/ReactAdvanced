/* Create an app that tracks the number of times an input field is focused using useRef, without causing re-renders. */

import React, { useState,useRef } from "react";

const InputFocusTracker = () => {
  const inputFocus = useRef(0);
  const [count, setCount] = useState(0);
  const handleFocus = () => {
    inputFocus.current += 1;
    setCount(inputFocus.current);
  };
  return (
    <div>
      <h1>Input Focus Tracker</h1>
      <input type="text" onFocus={handleFocus} placeholder="Enter Something" />
      <h2>Focus Count : {count}</h2>
    </div>
  );
};

export default InputFocusTracker;
