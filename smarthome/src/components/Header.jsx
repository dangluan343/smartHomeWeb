import React from "react";
import { Link } from "react-router-dom";

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
        <a href="dashboard" className="navbar-item">
          <Link to="room">Room</Link>
        </a>
        <a href="/" className="navbar-item">
          <Link to="dashboard">Dashboard</Link>
        </a>
      </div>
    </div>
  );
};

export default Header;
