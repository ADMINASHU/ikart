import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
import LogOutBtn from "./LogOutBtn";

const Navbar = () => {
  const { isLoggedIn, auth, search, setSearch } =
    useAuth();
  const { searchProduct } = useProduct();
  const [navView, setNavView] = useState(false);
  useEffect(() => {
    // console.log("Navbar: ", auth.accessToken);

    setNavView(false);
  }, []);

  useEffect(() => {
    searchProduct();
    // isLoggedIn();
  }, []);

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
        {auth?.role === "Seller" ? (
          <li className="link">
            <NavLink to={"/product"}>Product</NavLink>
          </li>
        ) : (
          <li className="link">
            <NavLink to={"/seller"}>Become a seller</NavLink>
          </li>
        )}
        <li className="link">
          <NavLink to={"/about"}>About</NavLink>
        </li>

        {auth?.accessToken ? (
          <li className="link">
            <NavLink
              onMouseOver={() => setNavView(true)}
              onClick={() => setNavView((prevState) => !prevState)}
            >
              {auth.username}
            </NavLink>
          </li>
        ) : (
          <li className="link">
            <NavLink to={"/signin"}>SignIn</NavLink>
          </li>
        )}
        <li className="link">
          <NavLink to={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} size="sm" />
            Cart
          </NavLink>
        </li>
      </ul>
      {auth?.accessToken && navView ? (
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
            <li className="profileLink">
              <NavLink to={"/signin"}>
                <FontAwesomeIcon icon={faPowerOff} size="sm" />
                <LogOutBtn
                  onClick={() => {
                    isLoggedIn();
                  }}
                />
              </NavLink>
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
