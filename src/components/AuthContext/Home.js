import React from "react";
import { useAuth } from "./AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Please log in to access the content.</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
