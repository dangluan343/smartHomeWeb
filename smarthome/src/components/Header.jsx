import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/" className="logo-link">
          SMNGULINH
        </a>
      </div>
      <div className="navbar">
        <a href="/" className="navbar-item">
          <Link to="/">Home</Link>
        </a>
        <a href="/" className="navbar-item has-dropdown">
          Room
          <AiFillCaretDown className="btn-down" />
          <span className="drop-down">
            <Link to="livingroom" className="drop-item">
              <span>LivingRoom</span>
            </Link>

            <Link to="kitchen" className="drop-item">
              <span>kitchen</span>
            </Link>

            <Link to="bedroom" className="drop-item">
              <span>bedroom</span>
            </Link>

            <Link to="bathroom" className="drop-item">
              <span>bathroom</span>
            </Link>
          </span>
        </a>
        <a href="/" className="navbar-item">
          <Link to="dashboard">Dashboard</Link>
        </a>
      </div>
    </div>
  );
};

export default Header;
