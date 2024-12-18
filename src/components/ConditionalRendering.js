import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome, User!" : "Please log in"}</h1>
      <button onClick={toggleLogin}>{isLoggedIn ? "Log out" : "Log in"}</button>
    </div>
  );
};

export default ConditionalRendering;
