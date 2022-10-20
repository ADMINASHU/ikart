import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
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
import useCartItem from "./hooks/useCartItem";
import { setSearch } from "../features/searchSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [navView, setNavView] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const { isLoggedIn, auth, setAuth } = useAuth();
  // const { searchProduct } = useProduct();
  const { setCartItem } = useCartItem();

  const navigate = useNavigate();

  useEffect(() => {
    setNavView(false);
    isLoggedIn();
    // searchProduct(search);
  }, []);

  const logOut = async () => {
    try {
      setNavView(false);
      dispatch(setSearch(""));
      Cookies.remove("auth");
      await axios.get("/logout");
      await setAuth({});
      await isLoggedIn();
      await setCartItem([]);

      await navigate("/signin");
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {value.trim() ? (
          <NavLink to={"/search"}>
            <button onClick={() => dispatch(setSearch(value.trim()))}>Search</button>
          </NavLink>
        ) : (
          <button onClick={() => dispatch(setSearch(""))}>Search</button>
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
                onClick={() => setNavView((navView) => !navView)}
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
