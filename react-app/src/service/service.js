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
    let getCookie = name => {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === name + '=') {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
    
      return cookieValue;
    };

    axios.defaults.headers.common['X-CSRFToken'] =
    getCookie('csrftoken');
  }

  whoami() {
    return axios
      .get("/accounts/whoami")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return;
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

  addCenter(data) {
    return axios({
      method: "post",
      url: `misc/branch/1/`,
      headers: { "Content-Type": "application/json" },
      data: data,
    })
      .then((response) => {})
      .catch((error) => {
        return { message: "Login Failed", valid: false };
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
