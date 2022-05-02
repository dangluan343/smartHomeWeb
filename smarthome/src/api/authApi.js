import axiosBackend from "./axiosBackend";

class AuthApi {
  register(newUser) {
    const url = "/auth/register";
    return axiosBackend.post(url, newUser);
  }

  login = (user) => {
    const url = "/auth/login";
    return axiosBackend.post(url, user);
  };
}

const authApi = new AuthApi();
export default authApi;
