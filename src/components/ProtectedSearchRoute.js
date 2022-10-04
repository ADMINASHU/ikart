import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const ProtectedSearchRoute = () => {
  const location = useLocation();
  const { search } = useAuth();

  return search ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
export default ProtectedSearchRoute;
