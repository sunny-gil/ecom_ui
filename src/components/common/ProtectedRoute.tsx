import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();

  // Wait until localStorage has been checked before deciding to redirect
  if (isLoading) {
    return null;
  }

  if (!user) {
    // Redirect to login if there is no user
    return <Navigate to="/login" replace />;
  }

  return children;
}; 
