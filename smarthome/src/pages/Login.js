import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

import authApi from "../api/authApi";
function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const setLoginUser = props.setLoginUser;

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const login = async () => {
      try {
        const response = await authApi.login(user);
        if (response.success === true) {
          alert("Login successful");
          setLoginUser({
            ...user,
            id: response.user._id,
          });
          navigate("/");
          console.log(user);
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    login();
  };

  return (
    <div className="login body">
      <div className="box">
        <h1>Log in</h1>
        <form className="user-info">
          <div className="user-input">
            <label htmlFor="username" className="user-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleInput}
            />
          </div>
          <div className="user-input">
            <label htmlFor="password" className="user-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="on"
              onChange={handleInput}
            />
          </div>
          <input
            type="submit"
            value="Log in"
            className="submit-btn"
            onClick={handleLogin}
          />
        </form>
        <p className="footer">
          Do not have an account?
          <span onClick={() => navigate("/register")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
