// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://io.adafruit.com/api/v2/thanhho",
  headers: {
    "content-type": "application/json",
    "x-AIO-Key": "aio_gxou78GGLo6h0ArfDaqKXGpQ7FGn",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
