import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authApi";
function Signup() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    password: "",
    veri_password: "",
    gmail: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const signUp = async () => {
      try {
        const response = await authApi.register(newUser);
        if (response.success === true) {
          alert("Added new account");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };

    signUp();
  };

  const loginBtnStyle = {
    backgroundColor: "red",
  };
  return (
    <div className="login">
      <div className="box">
        <h1>Sign up</h1>
        <form className="user-info">
          <div className="user-input">
            <label htmlFor="name" className="user-label">
              <span>*</span>name
            </label>
            <input type="text" name="name" onChange={handleInput} />
          </div>
          <div className="user-input">
            <label htmlFor="username" className="user-label">
              <span>*</span>Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleInput}
            />
          </div>
          <div className="user-input">
            <label htmlFor="gmail" className="user-label">
              <span>*</span>gmail
            </label>
            <input type="text" name="gmail" id="gmail" onChange={handleInput} />
          </div>
          <div className="user-input">
            <label htmlFor="password" className="user-label">
              <span>*</span>Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="on"
              onChange={handleInput}
            />
          </div>

          <div className="user-input">
            <label htmlFor="veri_password" className="user-label">
              <span>*</span>verify password
            </label>
            <input
              type="password"
              name="veri_password"
              autoComplete="on"
              onChange={handleInput}
            />
          </div>
          <div className="signUp btn-group">
            <input
              type="submit"
              value="Register"
              className="submit-btn"
              onClick={handleSubmit}
            />
            <input
              style={loginBtnStyle}
              type="submit"
              value="Login"
              className="submit-btn"
              onClick={() => navigate("/login")}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
