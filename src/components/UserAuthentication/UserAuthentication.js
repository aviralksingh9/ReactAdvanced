import React, { useState } from "react";
import UserProfile from "./UserProfile";
import Login from "./Login";

const UserAuthentication = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (username)=>{
    setUser(username)
  }
  const handleLogout = ()=>{
    setUser(null)
  }
  return <div>{!user ? <Login onLogin={handleLogin} /> : <UserProfile username={user} onLogout={handleLogout}/>}</div>;
};

export default UserAuthentication;
