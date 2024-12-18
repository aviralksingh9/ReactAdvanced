import React from "react";

const UserProfile = ({ username, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is your profile.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
