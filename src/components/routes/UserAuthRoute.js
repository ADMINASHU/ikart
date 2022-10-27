import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetAuthUserQuery } from "../../api/authApi";

const UserAuthRoute = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data: auth,
  } = useGetAuthUserQuery();

  const location = useLocation();
  return isError ? (
    <h2>`Oh no, there was an error ${error}`</h2>
  ) : isLoading ? (
    <h2>Loading...</h2>
  ) : isSuccess && auth?.role === "User" ? (
    <Outlet />
  ) : isSuccess && auth?.role === "Seller" ? (
    <Navigate to="/product" state={{ from: location }} replace />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default UserAuthRoute;
