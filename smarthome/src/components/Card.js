import React from "react";
import "../css/base.css";
import Switch from "./Switch";
import { useState, useEffect } from "react";
import { FaLightbulb, FaDoorClosed, FaDoorOpen, FaFan } from "react-icons/fa";

function Card(props) {
  const [imgStyle, setImgStyle] = useState("light-icon");
  const [door, setDoor] = useState(<FaDoorClosed className="light-icon" />);
  const [fanStyle, setFanStyle] = useState("light-icon");
  const [icon, setIcon] = useState();
  const [on, setOn] = useState("off");

  useEffect(() => {
    if (props.light === "true") {
      setIcon(<FaLightbulb className={imgStyle} />);
    } else if (props.door === "true") {
      setIcon(door);
    } else if (props.fan === "true") {
      setIcon(<FaFan className={fanStyle} />);
    }
  }, [imgStyle, door, fanStyle]);

  const turnOn = () => {
    if (on === "off") {
      if (props.light === "true") {
        setImgStyle("light-icon active");
      } else if (props.door === "true") {
        setDoor(<FaDoorOpen className="light-icon active" />);
        setIcon(door);
      } else if (props.fan === "true") {
        setFanStyle("light-icon active");
      }
      setOn("on");
    } else {
      if (props.light === "true") {
        setImgStyle("light-icon");
      } else if (props.door === "true") {
        setDoor(<FaDoorClosed className="light-icon" />);
        setIcon(door);
      } else if (props.fan === "true") {
        setFanStyle("light-icon");
      }
      setOn("off");
    }
  };
  return (
    <div className="card">
      <div className="card-img">{icon}</div>
      <div className="card-switch">
        <h3>{props.deviceName}</h3>
        <p className="power-text">Power</p>
        <div className="switch-btn" onClick={() => turnOn()}>
          <Switch />
        </div>
      </div>
    </div>
  );
}

export default Card;
