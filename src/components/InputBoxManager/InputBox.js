import React, { useState } from "react";

const InputBox = () => {
  const [inpValue, setInpValue] = useState("");

  const handleChange = (e) => {
    setInpValue(e.target.value);
  };

  if (inpValue === "delete") {
    return null;
  }

  return (
    <>
      <br />

      <input value={inpValue} onChange={handleChange} placeholder="Type here" />
    </>
  );
};

export default InputBox;
