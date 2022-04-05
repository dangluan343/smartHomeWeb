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
        <span className="navbar-item">
          <Link
            to="/"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              textTransform: "inherit",
            }}
          >
            home
          </Link>
        </span>
        <span className="navbar-item has-dropdown">
          Room
          <AiFillCaretDown className="btn-down" />
          <span className="drop-down">
            <Link
              style={{
                color: "inherit",
                textDecoration: "inherit",
                textTransform: "inherit",
              }}
              to="livingroom"
              className="drop-item"
            >
              LivingRoom
            </Link>

            <Link
              style={{
                color: "inherit",
                textDecoration: "inherit",
                textTransform: "inherit",
              }}
              to="kitchen"
              className="drop-item"
            >
              kitchen
            </Link>

            <Link
              style={{
                color: "inherit",
                textDecoration: "inherit",
                textTransform: "inherit",
              }}
              to="bedroom"
              className="drop-item"
            >
              bedroom
            </Link>

            <Link
              style={{
                color: "inherit",
                textDecoration: "inherit",
                textTransform: "inherit",
              }}
              to="bathroom"
              className="drop-item"
            >
              bathroom
            </Link>
          </span>
        </span>
        <span className="navbar-item">
          <Link
            style={{
              color: "inherit",
              textDecoration: "inherit",
              textTransform: "inherit",
            }}
            to="dashboard"
          >
            Dashboard
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
