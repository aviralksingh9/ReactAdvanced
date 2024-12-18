import React from "react";
import {  Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth-context" />;
  }

  return children;
};

export default ProtectedRoute;
