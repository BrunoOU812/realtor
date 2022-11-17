import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    setTimeout(() => {
      console.log("funca");
    }, 2000);
    return <h3>Loading...</h3>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/SignIn" />;
}
