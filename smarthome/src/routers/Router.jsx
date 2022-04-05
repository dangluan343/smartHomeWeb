import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Livingroom, Bathroom, Kitchen, Bedroom } from "../pages/Rooms";
import { Door, Light, Temperature, Humidity } from "../pages/Devices.js";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/livingroom" element={<Livingroom />} />
      <Route path="/bathroom" element={<Bathroom />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/bedroom" element={<Bedroom />} />
      <Route path="/door" element={<Door />} />
      <Route path="/light" element={<Light />} />
      <Route path="/temperature" element={<Temperature />} />
      <Route path="/humidity" element={<Humidity />} />
    </Routes>
  );
};

export default Router;
