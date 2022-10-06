import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UserAuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.role === "User" ? (
    <Outlet />
  ) : auth?.role === "Seller" ? (
    <Navigate to="/product" state={{ from: location }} replace />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default UserAuthRoute;
