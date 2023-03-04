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
