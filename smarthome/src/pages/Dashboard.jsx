import React from "react";
import Bg from "../assets/images/bg.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="title">REPORT</h1>
      <div className="graphic">
        <div className="home-img">
          <img src={Bg} alt="logo" />
        </div>
        <div className="report-graph">
          <p className="report-title">GRAPH</p>
        </div>
      </div>
      <h1 className="title">QUICK REPORT</h1>
      <div className="container">
        <div className="box">
          <p className="box-title">Running devices</p>
          <p className="number">5/15</p>
        </div>
        <div className="box">
          <p className="box-title">Average temperature</p>
          <p className="number">25C</p>
        </div>
        <div className="box">
          <p className="box-title">Average humidity</p>
          <p className="number">30%</p>
        </div>
        <div className="box">
          <p className="box-title">Running devices</p>
          <p className="number">223</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
