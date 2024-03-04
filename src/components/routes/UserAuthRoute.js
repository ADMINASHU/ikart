import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGetAuthQuery, useGetAuthUserQuery } from "../../api/iKartApi";

import Page404 from "../Page404";

const UserAuthRoute = () => {
  const { data: auth } = useGetAuthQuery(undefined, { refetchOnMountOrArgChange: true });
  const { isLoading, isError, error, data: user } = useGetAuthUserQuery();

  const location = useLocation();

  return isLoading ? (
    <h2>Loading...</h2>
  ) : isError ? (
    <h2>`Oh no, there was an error ${error}`</h2>
  ) : user?.role === "User" ? (
    <Outlet />
  ) : auth ? (
    <Page404/>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default UserAuthRoute;
