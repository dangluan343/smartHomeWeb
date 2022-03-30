import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import Router from "../routers/Router";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="container">
          <Router />
          {/* <Shop /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
