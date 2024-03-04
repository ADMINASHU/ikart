import { useGetAuthQuery } from "../../api/iKartApi";


const Authorized = ({ children }) => {
  const { data: auth } = useGetAuthQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  return auth ? children : null;
};
const UnAuthorized = ({ children }) => {
  const { data: auth } = useGetAuthQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  return !auth ? children : null;
};

export { Authorized, UnAuthorized };
