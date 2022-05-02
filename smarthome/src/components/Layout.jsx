import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

import Router from "../routers/Router";

const Layout = () => {
  const [user, setLoginUser] = useState({});

  return (
    <BrowserRouter>
      <div className="app">
        <Header user={user} setLoginUser={setLoginUser} />
        <div className="container">
          <Router user={user} setLoginUser={setLoginUser} />
          {/* */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
