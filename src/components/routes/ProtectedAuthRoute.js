import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetAuthUserQuery } from "../../api/authApi";

const ProtectedAuthRoute = () => {
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
  ) : isSuccess && auth?.username ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default ProtectedAuthRoute;
