import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import useUI from "./hooks/useUI";

const Profile = () => {
  const { isLoggedIn } = useAuth();
  const { setNavView } = useUI();
  useEffect(() => {
    isLoggedIn();
    setNavView(false);
  }, []);

  return <div>Profile</div>;
};

export default Profile;
