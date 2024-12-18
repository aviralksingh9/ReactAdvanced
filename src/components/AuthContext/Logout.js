import React from "react";
import { useAuth } from "./AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
