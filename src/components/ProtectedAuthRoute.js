import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const ProtectedAuthRoute = () => {
  const { auth, isLoggedIn } = useAuth();
  const location = useLocation();
  useEffect(() => {
    isLoggedIn();
  }, [])
  
  console.log("Protected Route: ", auth.accessToken);

  return auth.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default ProtectedAuthRoute;
