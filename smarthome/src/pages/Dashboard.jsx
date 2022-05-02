import React, { useState, useEffect } from "react";
import Bg from "../assets/images/bg.jpg";
import deviceApi from "../api/deviceApi";
import Graph from "../components/Graph";

function Dashboard(props) {
  const [totalDevice, setTotalDevice] = useState(0);
  const [runningDevice, setRunningDevice] = useState(0);
  const [averageTemp, setAverageTemp] = useState(0.0);
  const [averageHumi, setAverageHumi] = useState(0.0);
  const [totalLightTimeUsing, setTotalLightTimeUsing] = useState(0);
  const [totalFanTimeUsing, setTotalFanTimeUsing] = useState(0);

  const loadData = async () => {
    try {
      const totalDeviceData = await deviceApi.countAllDevice(
        props.user.username
      );
      setTotalDevice(totalDeviceData.data);
      const runningDeviceData = await deviceApi.countRunningDevice();
      setRunningDevice(runningDeviceData);
      const avertempdata = await deviceApi.getAverageTemp();
      setAverageTemp(avertempdata);
      const averHumidata = await deviceApi.getAverageHumi();
      setAverageHumi(averHumidata);
      deviceApi
        .getDevices()
        .then((devices) => {
          setTotalLightTimeUsing(0);
          devices.forEach(async (device) => {
            if (device.description === "led") {
              let lightDevices = await deviceApi.getFeedData("led");
              lightDevices = [...lightDevices.reverse()];
              var totalTime = 0;
              for (var i = 0; i < lightDevices.length; i += 2) {
                totalTime +=
                  Date.parse(lightDevices[i + 1].created_at) -
                  Date.parse(lightDevices[i].created_at);
              }
              // console.log(totalTime, totalTime);
              setTotalLightTimeUsing((time) => time + totalTime);
            }
          });
        })
        .catch((err) => console.log(err));

      deviceApi
        .getDevices()
        .then((devices) => {
          setTotalFanTimeUsing(0);
          devices.forEach(async (device) => {
            if (device.description === "fan") {
              let fanDevices = await deviceApi.getFeedData("fan");
              fanDevices = [...fanDevices.reverse()];
              var totalTime = 0;

              for (var i = 0; i < fanDevices.length; i += 2) {
                totalTime +=
                  Date.parse(fanDevices[i + 1].created_at) -
                  Date.parse(fanDevices[i].created_at);
              }
              // console.log(totalTime, totalTime);
              setTotalFanTimeUsing((time) => time + totalTime);
            }
          });
        })
        .catch((err) => console.log(err));
      // const TimeLedUsing = temp.reduce((a, b) => a + b, 0);
      // console.log(TimeLedUsing);
    } catch (err) {
      console.log({ err: err.message });
    }
  };
  // console.log(totalLightTimeUsing);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="title">REPORT</h1>
      <div className="graphic">
        <div className="home-img">
          <img src={Bg} alt="logo" />
        </div>
        <div className="report-graph">
          <p className="report-title">GRAPH</p>
          <Graph
            lightTimeUsing={totalLightTimeUsing}
            doorTimeUsing={totalFanTimeUsing}
          />
        </div>
      </div>
      <h1 className="title">QUICK REPORT</h1>
      <div className="container">
        <div className="box">
          <p className="box-title">Running devices</p>
          <p className="number">
            {runningDevice}/{totalDevice}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Average temperature</p>
          <p className="number">{averageTemp}C</p>
        </div>
        <div className="box">
          <p className="box-title">Average humidity</p>
          <p className="number">{averageHumi}%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
