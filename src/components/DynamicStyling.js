import React, { useState, useEffect } from "react";

const DynamicStyling = () => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const changeTheme = () => {
    setToggleTheme(!toggleTheme);
  };
  useEffect(() => {
    document.body.style.backgroundColor = toggleTheme ? "black" : "";
    document.body.style.color = toggleTheme ? "white" : "";
  }, [toggleTheme]);
  return (
    <div>
      <h1>Dynamic Styling</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default DynamicStyling;
