import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import useUI from "./hooks/useUI";
import {
  faCartShopping,
  faCircleUser,
  faBox,
  faHeart,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProduct from "./hooks/useProduct";
import axios from "../api/axios";
import Cookies from "js-cookie";

const Navbar = () => {
  const { isLoggedIn, auth, setAuth, search, setSearch } = useAuth();
  const { navView, setNavView } = useUI();
  const { searchProduct } = useProduct();
  useEffect(() => {
    searchProduct();
    setNavView(false);
  }, []);
  const logOut = async () => {
    try {
      setNavView(false);
      Cookies.remove("auth");
      await axios.get("/logout");
      await isLoggedIn();
      await setAuth({});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <NavLink className="logo" to={"/"}>
        {/* <img className="image" src="" alt="logo" /> */}
        <span className="i">i</span>
        <span className="kart">Kart</span>
      </NavLink>
      <div className="search">
        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search.trim() ? (
          <NavLink to={"/search"}>
            <button onClick={() => searchProduct()}>Search</button>
          </NavLink>
        ) : (
          <button onClick={() => setSearch("")}>Search</button>
        )}
      </div>
      <ul className="links">
        <li className="link">
          <NavLink to={"/about"}>About</NavLink>
        </li>

        {auth ? (
          (auth?.role === "Seller" && (
            <li className="link">
              <NavLink to={"/product"}>Product</NavLink>
            </li>
          )) ||
          (auth?.role === "User" && (
            <li className="link">
              <NavLink to={"/seller"}>Become a seller</NavLink>
            </li>
          ))
        ) : (
          <li className="link">
            <NavLink to={"/seller"}>Become a seller</NavLink>
          </li>
        )}

        {auth ? (
          auth?.username && (
            <li className="link">
              <NavLink
                onMouseOver={() => setNavView(true)}
                onClick={() => setNavView((prevState) => !prevState)}
              >
                {auth?.username}
              </NavLink>
            </li>
          )
        ) : (
          <li className="link">
            <NavLink to={"/signin"}>SignIn</NavLink>
          </li>
        )}
        <li className="link">
          <NavLink to={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} size="sm" />
          </NavLink>
        </li>
      </ul>
      {auth?.username && navView ? (
        <div
          className="profileNav"
          onMouseOver={() => setNavView(true)}
          onMouseOut={() => setNavView(false)}
        >
          <ul className="profileLinks">
            <li className="profileLink">
              <NavLink to={"/profile"}>
                <FontAwesomeIcon icon={faCircleUser} size="sm" />
                Profile
              </NavLink>
            </li>
            <li className="profileLink">
              <NavLink to={"/orders"}>
                <FontAwesomeIcon icon={faBox} size="sm" />
                Orders
              </NavLink>
            </li>
            <li className="profileLink">
              <NavLink to={"/wishlist"}>
                <FontAwesomeIcon icon={faHeart} size="sm" />
                Wishlist
              </NavLink>
            </li>
            <li className="profileLink" onClick={logOut}>
              <FontAwesomeIcon icon={faPowerOff} size="sm" />
              Log Out
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
