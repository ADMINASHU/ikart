import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UnProtectedRoute = () => {
  const { loggedIn, auth, isLoggedIn } = useAuth();
  const location = useLocation();
  useEffect(() => {
    isLoggedIn();
  }, [loggedIn]);

  return auth?.accessToken ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default UnProtectedRoute;
