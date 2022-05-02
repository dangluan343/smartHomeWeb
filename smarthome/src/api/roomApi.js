import axiosBackend from "./axiosBackend";
// api/lightApi.js
class RoomApi {
  getAll = (userId) => {
    const url = "/activities/DevicesInRoomByUser";
    const user = { userId: userId };
    return axiosBackend.post(url, user);
  };

  getAverageInfo = (userId) => {
    const url = "/activities/AverageInfoInRoomByUser";
    const user = { userId: userId };
    return axiosBackend.post(url, user);
  };
}

const roomApi = new RoomApi();
export default roomApi;
