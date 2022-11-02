import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Authorized, UnAuthorized } from "../hiddenLink/HiddenLink";
import {
  faCartShopping,
  faCircleUser,
  faBox,
  faHeart,
  faPowerOff,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setSearch } from "../../features/searchSlice";
import { useDispatch } from "react-redux";
import {
  useGetAuthUserQuery,
  useGetCartItemsQuery,
  useGetLogOutMutation,
} from "../../api/iKartApi";

const Navbar = () => {
  const navigate = useNavigate();
  // get user info
  const { data: user } = useGetAuthUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [getLogOut] = useGetLogOutMutation(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const { data: cart } = useGetCartItemsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [navView, setNavView] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setNavView(false);
  }, []);

  const logOut = () => {
    setNavView(false);
    dispatch(setSearch(""));
    getLogOut();
    // navigate("/signin");
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setSearch(e.target.value.trim()));
              navigate("/search");
            }
          }}
        />

        {value.trim() ? (
          <NavLink to={"/search"}>
            {/* <button onClick={() => dispatch(setSearch(value.trim()))}> */}
            <FontAwesomeIcon
              className="button"
              onClick={() => dispatch(setSearch(value.trim()))}
              icon={faSearch}
              size="sm"
            />
            {/* </button> */}
          </NavLink>
        ) : (
          // <button onClick={() => dispatch(setSearch(""))}>
          <FontAwesomeIcon
            className="button"
            onClick={() => dispatch(setSearch(""))}
            icon={faSearch}
            size="sm"
          />
          // </button>
        )}
      </div>
      <ul className="links">
        <Authorized>
          {user?.uname && (
            <li className="link">
              <NavLink
                // onMouseOver={() => setNavView(true)}
                onClick={() => {
                  setNavView((navView) => !navView);
                }}
              >
                {user?.uname}
              </NavLink>
            </li>
          )}
        </Authorized>
        <UnAuthorized>
          <li className="link signin">
            <NavLink to={"/signin"}>
              <span>SignIn</span>{" "}
            </NavLink>
          </li>
        </UnAuthorized>
        <li className="link">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <Authorized>
          {(user?.role === "Seller" && (
            <li className="link">
              <NavLink to={"/product"}>Product</NavLink>
            </li>
          )) ||
            (user?.role === "User" && (
              <li className="link">
                <NavLink to={"/seller"}>Become a seller</NavLink>
              </li>
            ))}
        </Authorized>
        <UnAuthorized>
          <li className="link">
            <NavLink to={"/seller"}>Become a seller</NavLink>
          </li>
        </UnAuthorized>

        <li className="link">
          <NavLink to={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} size="sm" />
            <Authorized>
              {cart?.cartCount > 0 && (
                <span className="cartCount">{cart?.cartCount}</span>
              )}
            </Authorized>
          </NavLink>
        </li>
      </ul>
      <Authorized>
        {navView && (
          <div
            className="profileNav"
            onMouseOver={() => setNavView(true)}
            onMouseOut={() => setNavView(false)}
          >
            <ul className="profileLinks">
              <li className="profileLink">
                <NavLink to={"/profile"}>
                  <div>
                    <FontAwesomeIcon icon={faCircleUser} size="sm" />
                    &nbsp; Profile
                  </div>
                </NavLink>
              </li>
              <li className="profileLink">
                <NavLink to={"/orders"}>
                  <div>
                    <FontAwesomeIcon icon={faBox} size="sm" />
                    &nbsp; Orders
                  </div>
                </NavLink>
              </li>
              <li className="profileLink">
                <NavLink to={"/wishlist"}>
                  <div>
                    <FontAwesomeIcon icon={faHeart} size="sm" />
                    &nbsp; Wishlist
                  </div>
                </NavLink>
              </li>
              <li className="profileLink" onClick={logOut}>
                <NavLink>
                  <div>
                    <FontAwesomeIcon icon={faPowerOff} size="sm" />
                    &nbsp; Log Out
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </Authorized>
    </div>
  );
};

export default Navbar;
