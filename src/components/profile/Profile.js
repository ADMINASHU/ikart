import React, { useEffect } from "react";
import { useGetAuthUserQuery } from "../../api/authApi";


const Profile = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data:authUser,
  } = useGetAuthUserQuery()





  return <div>Profile</div>;
};

export default Profile;
