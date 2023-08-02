import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
  let location = useLocation();

  return (
    <div className="l-navbar show" id="nav-bar">
      <nav className="nav">
        <div>
          <Link to="/" className="nav_logo">
            <i className="bx bx-layer nav_logo-icon"></i>
            <span className="nav_logo-name">iNotebook</span>
          </Link>
          <div className="nav_list">
            <Link to="/" className={`nav_link ${location.pathname === "/" ? "active" : ""}`}>
              <i className="bx bx-grid-alt nav_icon"></i>
              <span className="nav_name">View Notes</span>
            </Link>
            <Link to="/addnote" className={`nav_link ${location.pathname === "/addnote" ? "active" : ""}`}>
              <i className="bx bx-grid-alt nav_icon"></i>
              <span className="nav_name">Add a note</span>
            </Link>
            <Link to="/about" className={`nav_link ${location.pathname === "/about" ? "active" : ""}`}>
              <i className="bx bx-user nav_icon"></i>
              <span className="nav_name">About Us</span>
            </Link>
          </div>
        </div>
        <Link to="/login" className={`nav_link ${location.pathname === "/login" ? "active" : ""}`}>
          <i className="bx bx-log-out nav_icon"></i>
          <span className="nav_name">Logout</span>
        </Link>
        <Link to="/login" className={`nav_link ${location.pathname === "/login" ? "active" : ""}`}>
          <i className="bx bx-log-out nav_icon"></i>
          <span className="nav_name">Login</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
