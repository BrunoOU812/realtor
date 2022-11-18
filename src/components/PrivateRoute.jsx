import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";
export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    setTimeout(() => {
      console.log("funca");
    }, 2000);
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/SignIn" />;
}
