import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
function Header(props) {
  const { user, setLoginUser } = props;
  const [isLogin, setIsLogin] = useState("header notLogin");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoginFunc = () => {
      if (JSON.stringify(user) !== JSON.stringify({})) {
        setIsLogin("header login");
      }
    };
    isLoginFunc();
  }, [user]);

  const logout = () => {
    navigate("/login");
    setLoginUser({});
    setIsLogin("header notLogin");
  };
  return (
    <div className={isLogin}>
      <div className="logo">
        <span className="logo-link" onClick={() => navigate("/")}>
          SMNGULINH
        </span>
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

        <span className="navbar-item">
          <Link
            style={{
              color: "inherit",
              textDecoration: "inherit",
              textTransform: "inherit",
            }}
            to="/login"
          >
            <RiLogoutCircleLine
              style={{
                color: "inherit",
                textDecoration: "inherit",
                textTransform: "inherit",
                fontSize: "2rem",
                verticalAlign: "sub",
              }}
              onClick={logout}
            />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
