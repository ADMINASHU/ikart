import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UnProtectedRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log("User: ", auth.username);

  return auth?.username && auth?.username ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default UnProtectedRoute;
