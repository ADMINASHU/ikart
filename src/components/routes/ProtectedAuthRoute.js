import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetAuthQuery } from "../../api/iKartApi";

const ProtectedAuthRoute = () => {
  const {
    isLoading,
    isError,
    error,
    data: auth,
  } = useGetAuthQuery(undefined, { refetchOnMountOrArgChange: true });

  const location = useLocation();

  return isLoading ? (
    <h2>Loading...</h2>
  ) : isError ? (
    <h2>`Oh no, there was an error ${error}`</h2>
  ) : auth ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default ProtectedAuthRoute;
