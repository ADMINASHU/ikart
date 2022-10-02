import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const Navbar = () => {
  const { auth } = useAuth();
  return (
    <div className="navbar">
      <NavLink className="logo" to={"/"}>
        <img className="image" src="" alt="logo" />
        <span className="i">i</span>
        <span className="kart">Kart</span>
      </NavLink>
      <ul className="links">
        <li className="link">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/about"}>About</NavLink>
        </li>

        <li className="link">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        {auth?.username ? (
          <>
            <li className="link">
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </>
        ) : (
          <li className="link">
            <NavLink to={"/signin"}>SignIn</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
