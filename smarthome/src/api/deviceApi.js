import axiosBackend from "./axiosBackend";
import axiosClient from "./axiosClient";
// api/deviceApi.js

class DeviceApi {
  getAll = (userId) => {
    const url = "/activities/DevicesByUser";
    const user = { userId: userId };
    return axiosBackend.post(url, user);
  };

  getDeviceByRoom = (userId, room) => {
    const url = `/activities/DeviceByRoom/${userId}/${room}`;
    return axiosBackend.get(url);
  };

  countAllDevice = (username) => {
    const url = "/activities/countAllDevice/luanluan";
    return axiosBackend.get(url);
  };

  countRunningDevice = async () => {
    const url = "/feeds";
    const devices = await axiosClient.get(url);
    var count = 0;
    devices.forEach((device) => {
      if (
        device.description === "humidity" ||
        device.description === "temperature" ||
        device.description === "lightSensor"
      ) {
        count = count + 1;
      } else {
        if (
          device.last_value === "LED1" ||
          device.last_value === 1 ||
          device.last_value === "FAN1"
        ) {
          count = count + 1;
        }
      }
    });
    // console.log(count);
    return count;
  };

  getAverageTemp = async () => {
    const url = "/feeds/temperature/data";
    const averTempdata = await axiosClient.get(url);
    var average = 0.0;
    const len = averTempdata.length;
    averTempdata.forEach((aver) => {
      average = average + parseFloat(aver.value);
    });
    average = Math.round(average / len);
    return average;
  };

  getAverageHumi = async () => {
    const url = "/feeds/humidity/data";
    const averHumidata = await axiosClient.get(url);
    var average = 0.0;
    const len = averHumidata.length;
    averHumidata.forEach((aver) => {
      average = average + parseFloat(aver.value);
    });
    average = Math.round((average / len / 1023) * 100);
    return average;
  };

  getDevices = async () => {
    const url = "/feeds";
    const devices = await axiosClient.get(url);

    return devices;
  };

  getAllFeed = () => {
    const url = "/feeds";
    return axiosClient.get(url);
  };

  turnOn = (keyFeed, value) => {
    const url = `/feeds/${keyFeed}/data`;
    const data = {
      datum: {
        value: value,
      },
    };
    return axiosClient.post(url, data);
  };

  turnOff = (keyFeed, value) => {
    const url = `/feeds/${keyFeed}/data`;
    const data = {
      datum: {
        value: value,
      },
    };
    return axiosClient.post(url, data);
  };

  getLastValueFeed = (keyFeed) => {
    const url = `/feeds/${keyFeed}/data/retain`;
    return axiosClient.get(url);
  };

  getFeedData = (keyFeed) => {
    const url = `/feeds/${keyFeed}/data`;
    return axiosClient.get(url);
  };

  deleteFeedData = (keyFeed) => {
    const url = `feeds/${keyFeed}/data`;
    return axiosClient.delete(url);
  };
}

const deviceApi = new DeviceApi();
export default deviceApi;
