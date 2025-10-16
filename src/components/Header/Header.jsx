import React from "react";
import { NavLink } from "react-router";
import "../../App.css";

const Header = () => {
  return (
    <nav>
      <NavLink className="card" to="/">
        Home
      </NavLink>
      <NavLink className="card" to="/register">
        Register
      </NavLink>
      <NavLink className="card" to="/login">
        Login
      </NavLink>
      <NavLink className="card" to="/logout">
        Logout
      </NavLink>
    </nav>
  );
};

export default Header;
