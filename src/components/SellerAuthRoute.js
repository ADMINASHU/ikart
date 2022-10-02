import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const SellerAuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.role==="Seller" ? (
    <Outlet />
  ) : (
    <Navigate to="/seller" state={{ from: location }} replace />
  );
};
export default SellerAuthRoute;
