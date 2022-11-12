import React from "react";
import "./profile.scss";
import {
  faAngleRight,
  faBox,
  faPowerOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAuthQuery, useGetAuthUserQuery } from "../../api/iKartApi";
import { NavLink, Route, Routes} from "react-router-dom";
import Wishlist from "../Wishlist";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  const { data: auth } = useGetAuthQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // get user info
  const { isLoading, data: user } = useGetAuthUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
    skip: !auth,
  });

  return (
    <div className="profilePage page">
      <div className="proNav">
        <div className="proHeader">
          <div className="proImg">
          <img src={user?.image} alt="user image" />
          </div>
          <div className="proName">
            <div className="hello">Hello,</div>
            {user?.uname}
          </div>
        </div>
        <div className="account">
          <NavLink to={"/orders"}>
            <div className="order left">
              <div className="order_under">
                <FontAwesomeIcon className="icon" icon={faBox} size="sm" />
                <span>My Orders</span>
              </div>
              <FontAwesomeIcon className="icon" icon={faAngleRight} size="sm" />
            </div>
          </NavLink>
          <div className="profile left">
            <span className="heading">
              <FontAwesomeIcon className="icon" icon={faUser} size="sm" />
              Account Settings
            </span>
          </div>
          <div className="links">
            <NavLink to={"/profile/"}>
              Profile Information
            </NavLink>
          </div>
          <div className="links">
            <NavLink to={"/profile/address"}>Manage Address</NavLink>
          </div>
          <div className="links wish">
            <NavLink to={"/profile/wishlist"}>My Wishlist</NavLink>
          </div>
          <NavLink to={"/"}>
            <div className="order left">
              <div className="order_under">
                <FontAwesomeIcon className="icon" icon={faPowerOff} size="sm" />
                <span>Logout</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="proDetails">
        <Routes>
          <Route path="/" element={<ProfileInfo />} />
          <Route path="/info" element={<ProfileInfo />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Routes>
      </div>
     
    </div>
  );
};

export default Profile;
