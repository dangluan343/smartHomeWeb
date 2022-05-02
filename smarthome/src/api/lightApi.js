import axiosClient from "./axiosClient";
// api/lightApi.js
class LightApi {
  getAll = (params) => {
    const url = "";
    return axiosClient.get(url, { params });
  };

  turnOn = () => {
    const url = `/bbc-led/data`;
    const data = { value: "1" };
    return axiosClient.post(url, data);
  };

  turnOff = () => {
    const url = `/bbc-led/data`;
    const data = { value: "0" };
    return axiosClient.post(url, data);
  };
}

const lightApi = new LightApi();
export default lightApi;
