import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const ProtectedAuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log("User", auth?.username);

  return auth
    ? auth?.username && <Outlet />
    : !auth?.username && (
        <Navigate to="/signin" state={{ from: location }} replace />
      );
};
export default ProtectedAuthRoute;
