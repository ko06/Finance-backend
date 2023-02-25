import axios from "axios";

/**
 * Function to clean base URL
 * It is helpful to avoid cross origin request error in development mode
 * Example:
 * http://127.0.0.1:8000/api/global-dataset/list/?page=2 will be changed to /api/global-dataset/list/?page=2
 *
 */

class APIService {
  login(data) {
    return axios({
      method: "post",
      url: `/accounts/login/`,
      headers: { "Content-Type": "application/json" },
      data: data,
    })
      .then((response) => {
        window.localStorage.setItem("accessToken", response.data.token);
        return { message: "Login Successfully", valid: true };
      })

      .catch((error) => {
        window.localStorage.removeItem("accessToken");
        return { message: "Login Failed", valid: false };
      });
  }
}

const PublicService = new APIService();

export default PublicService;
