import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UnProtectedRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.accessToken ? (
    <Navigate to="/profile" state={{ from: location }} replace />
    ) : (
    <Outlet />
  );
};
export default UnProtectedRoute;
