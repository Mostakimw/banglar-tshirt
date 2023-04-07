import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navLink">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/grandpa">
        Grandpa
      </Link>

      <Link className="nav-link" to="/contact">
        Contact
      </Link>
      <Link className="nav-link" to="/review">
        Review
      </Link>
      {/* <Link to="/"></Link> */}
    </nav>
  );
};

export default Header;
