import { React } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Livingroom, Bathroom, Kitchen, Bedroom } from "../pages/Rooms";
import { Door, Light, Temperature, Humidity } from "../pages/Devices.js";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function Router(props) {
  // const [user, setLoginUser] = useState({});
  const { user, setLoginUser } = props;

  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />

      <Route path="/" element={<Home user={user} />} />
      <Route path="/dashboard" element={<Dashboard user={user} />} />
      <Route path="/livingroom" element={<Livingroom user={user} />} />
      <Route path="/bathroom" element={<Bathroom user={user} />} />
      <Route path="/kitchen" element={<Kitchen user={user} />} />
      <Route path="/bedroom" element={<Bedroom user={user} />} />
      <Route path="/door" element={<Door user={user} />} />
      <Route path="/light" element={<Light user={user} />} />
      <Route path="/temperature" element={<Temperature user={user} />} />
      <Route path="/humidity" element={<Humidity />} user={user} />
    </Routes>
  );
}

export default Router;
