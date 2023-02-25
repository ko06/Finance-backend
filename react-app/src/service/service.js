import axios from "axios";

/**
 * Function to clean base URL
 * It is helpful to avoid cross origin request error in development mode
 * Example:
 * http://127.0.0.1:8000/api/global-dataset/list/?page=2 will be changed to /api/global-dataset/list/?page=2
 *
 */

class APIService {
  constructor() {
    if (window.localStorage.getItem("accessToken")) {

      axios.defaults.headers[
        "Authorization"
      ] = `Token ${window.localStorage.getItem("accessToken")}`;
    }
  }

  login(data) {
    return axios({
      method: "post",
      url: `/accounts/login/`,
      headers: { "Content-Type": "application/json" },
      data: data,
    })
      .then((response) => {
        debugger;
        window.localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.token)
        );
        return { message: "Login Successfully", valid: true };
      })
      .catch((error) => {
        return { message: "Login Failed", valid: false };
      });
  }

  load(url, query) {
    return axios
      .get(url || `/api/lookup/datasetmedia/?filter=${query}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return;
      });
  }

  loadLiveWorkshops(url, query) {
    return axios
      .get(url || `/api/lookup/events/?filter=${query}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return;
      });
  }

  whoami() {
    return axios
      .get("/api/whoami/")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return;
      });
  }

  getCaste() {
    return axios
      .get("/misc/caste/")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return;
      });
  }

  getBranches() {
    return axios
      .get("/misc/branch/all")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return;
      });
  }

  getCenters(id) {
    return axios
      .get(`misc/branch/${id}/`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return;
      });
  }

  getStaffs(id) {
    return axios
      .get(`misc/roles/${id}/`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return;
      });
  }
}

const PDService = new APIService();

export default PDService;
