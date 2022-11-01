import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetAuthQuery } from "../../api/iKartApi";



const UnProtectedRoute = () => {
  const { isLoading, isError, error, data: auth } = useGetAuthQuery(undefined, { refetchOnMountOrArgChange: true });

  const location = useLocation();

  return isLoading ? (
    <h2>Loading...</h2>
  ) : isError ? (
    <h2>`Oh no, there was an error ${error}`</h2>
  ) : auth ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default UnProtectedRoute;
