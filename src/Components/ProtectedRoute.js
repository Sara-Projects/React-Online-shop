import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Navigate, useAsyncValue } from "react-router-dom";

export default function ProtectedRoute({ children }) {
 const { loginWithRedirect, isAuthenticated } = useAuth0();

useEffect(() => {
  if (!isAuthenticated) loginWithRedirect();
  }, [isAuthenticated]);
  return children;
  }