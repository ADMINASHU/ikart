import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="logo" to={"/"}>
        <img src="" alt="logo" />
      </NavLink>
      <ul className="links">
        <li className="link">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/sigin"}>SignIn</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/profile"}>Profile</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
