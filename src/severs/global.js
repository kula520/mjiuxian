//services/global.js"
import axios from "axios";
// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
export default {
  mockdata(url, params) {
    return fetch(url, params);
  }
};