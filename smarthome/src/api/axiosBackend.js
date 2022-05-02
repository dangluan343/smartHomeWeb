// api/axiosBackend.js
import axios from "axios";
import queryString from "query-string";





const axiosBackend = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosBackend.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosBackend.interceptors.response.use(
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
export default axiosBackend;
