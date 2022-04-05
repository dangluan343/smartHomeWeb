import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Livingroom, Bathroom, Kitchen, Bedroom } from "../pages/Rooms";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/livingroom" element={<Livingroom />} />
      <Route path="/bathroom" element={<Bathroom />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/bedroom" element={<Bedroom />} />
    </Routes>
  );
};

export default Router;
