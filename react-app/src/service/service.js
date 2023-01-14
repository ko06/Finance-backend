import axios from 'axios';

/**
 * Function to clean base URL
 * It is helpful to avoid cross origin request error in development mode
 * Example:
 * http://127.0.0.1:8000/api/global-dataset/list/?page=2 will be changed to /api/global-dataset/list/?page=2
 *
 */

class APIService {
  constructor() {
    // axios.defaults.headers.common['X-CSRFToken'] = this.getCookie('csrftoken');
  }

  load(url, query) {
    return axios
      .get(url || `/api/lookup/datasetmedia/?filter=${query}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return;
      });
  }

  loadLiveWorkshops(url, query) {
    return axios
      .get(url || `/api/lookup/events/?filter=${query}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return;
      });
  }

  whoami() {
    return axios
      .get('/api/whoami/')
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return;
      });
  }

  getCaste(){
    return axios
      .get('misc/caste/')
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return;
      });
  }
}

const PDService = new APIService();

export default PDService;
