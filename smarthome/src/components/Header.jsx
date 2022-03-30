import React from "react";

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
          Home
        </a>
        <a href="/" className="navbar-item">
          Room
        </a>
        <a href="/" className="navbar-item">
          Dashboard
        </a>
      </div>
    </div>
  );
};

export default Header;
