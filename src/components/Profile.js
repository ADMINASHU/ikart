import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";

const Profile = () => {
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    isLoggedIn();
  }, []);

  return <div>Profile</div>;
};

export default Profile;
