import React from "react";
import "./profile.scss";
import {
  faAngleRight,
  faBox,
  faBuilding,
  faPowerOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAuthQuery, useGetAuthUserQuery } from "../../api/iKartApi";
import { NavLink, Route, Routes } from "react-router-dom";
import Wishlist from "./wishlist/Wishlist";
import ProfileInfo from "./info/ProfileInfo";
import Address from "./address/Address";
import SellerInfo from "./sellerInfo/SellerInfo";
import SellerAuthRoute from "../routes/SellerAuthRoute";
import Page404 from "../Page404";

const Profile = () => {
  const { data: auth } = useGetAuthQuery(undefined, { refetchOnMountOrArgChange: true });

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
            <img src={user?.image} alt="user" />
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
            <NavLink to={"/profile/userInfo"}>Profile Information</NavLink>
          </div>
          <div className="links">
            <NavLink to={"/profile/address"}>Manage Address</NavLink>
          </div>
          <div className="links end">
            <NavLink to={"/profile/wishlist"}>My Wishlist</NavLink>
          </div>
          {isLoading ? null : user.role === "Seller" ? (
            <>
              <div className="profile left">
                <span className="heading">
                  <FontAwesomeIcon className="icon" icon={faBuilding} size="sm" />
                  Seller Account
                </span>
              </div>
              <div className="links">
                <NavLink to={"/profile/sellerInfo"}>Seller Account</NavLink>
              </div>
              <div className="links end">
                <NavLink to={"/profile/sellerOffer"}>Seller Offers</NavLink>
              </div>
            </>
          ) : null}

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
          <Route path="userInfo" element={<ProfileInfo />} />
          <Route path="address" element={<Address />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route element={<SellerAuthRoute />}>
            <Route path="sellerInfo" element={<SellerInfo />} />
            {/* <Route path="sellerOffer" element={} /> */}
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
