import React from "react";
import "../css/base.css";
import Switch from "./Switch";
import { useState, useEffect } from "react";
import { FaLightbulb, FaFan, FaDoorOpen, FaDoorClosed } from "react-icons/fa";
import { FaAutoprefixer } from "react-icons/fa";
import deviceApi from "../api/deviceApi";
function Card(props) {
  const [imgStyle, setImgStyle] = useState("light-icon");
  const [door, setDoor] = useState(<FaDoorClosed className="light-icon" />);
  const [fanStyle, setFanStyle] = useState("light-icon");
  const [automatic, setAutomatic] = useState("light-icon");
  const [icon, setIcon] = useState();
  const [on, setOn] = useState("off");

  useEffect(() => {
    if (props.light === "true" && props.isActive) {
      setImgStyle("light-icon active");
      setIcon(<FaLightbulb className={imgStyle} />);
      setOn("on");
    } else if (props.door === "true" && props.isActive) {
      setDoor(<FaDoorOpen className="light-icon active" />);
      setIcon(door);
      setOn("on");
    } else if (props.fan === "true" && props.isActive) {
      setFanStyle("light-icon fanactive");
      setIcon(<FaFan className={fanStyle} />);
      setOn("on");
    } else if (props.auto === "true" && props.isActive) {
      setAutomatic("light-icon active");
      setIcon(<FaAutoprefixer className={automatic} />);
      setOn("on");
    }

    if (props.light === "true" && !props.isActive) {
      setImgStyle("light-icon");
      setIcon(<FaLightbulb className={imgStyle} />);
      setOn("off");
    } else if (props.door === "true" && !props.isActive) {
      setDoor(<FaDoorOpen className="light-icon" />);
      setIcon(door);
      setOn("off");
    } else if (props.fan === "true" && !props.isActive) {
      setFanStyle("light-icon");
      setIcon(<FaFan className={fanStyle} />);
      setOn("off");
    } else if (props.auto === "true" && !props.isActive) {
      setAutomatic("light-icon");
      setIcon(<FaAutoprefixer className={automatic} />);
      setOn("off");
    }
  }, [imgStyle, door, fanStyle, automatic, props.isActive]);

  const turnOn = () => {
    if (on === "off") {
      if (props.light === "true") {
        setImgStyle("light-icon active");
      } else if (props.door === "true") {
        setDoor(<FaDoorOpen className="light-icon active" />);
        setIcon(door);
      } else if (props.fan === "true") {
        setFanStyle("light-icon fanactive");
      } else if (props.auto === "true") {
        setAutomatic("light-icon active");
      }
      setOn("on");
      const toggleStatus = async () => {
        console.log(props.keyFeed, typeof props.keyFeed);
        const temp = await deviceApi.turnOn(props.keyFeed, props.onValue);
        console.log(temp);
      };

      toggleStatus();
    } else {
      if (props.light === "true") {
        setImgStyle("light-icon");
      } else if (props.door === "true") {
        setDoor(<FaDoorClosed className="light-icon" />);
        setIcon(door);
      } else if (props.fan === "true") {
        setFanStyle("light-icon");
      } else if (props.auto === "true") {
        setAutomatic("light-icon");
      }
      setOn("off");

      const toggleStatus = async () => {
        const temp = await deviceApi.turnOff(props.keyFeed, props.offValue);
        console.log(temp);
      };

      toggleStatus();
    }
  };
  return (
    <div className="card">
      <div className="card-img">{icon}</div>
      <div className="card-switch">
        <h3>{props.deviceName}</h3>
        <p className="power-text">Power</p>
        <div className="switch-btn" onClick={() => turnOn()}>
          {props.door === "false" && <Switch />}
        </div>
      </div>
    </div>
  );
}
// const [color, setColor] = useState("black");
//
export default Card;
