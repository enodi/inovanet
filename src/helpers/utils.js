import axios from "axios";

const baseURL = `${process.env.REACT_APP_BASE_URL}`

export const axiosInstance = axios.create({ baseURL });

export class Api {
  static config() {
    try {
      const token = localStorage.getItem('token');
      return(
        token && {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    }
    catch(e){
      return null
    }
  }

  static get(url, params, conf) {
    const headers = this.config()
    const config = { ...headers, params, ...conf }
    return axiosInstance.get(url, config);
  }

  static post(url, data, conf) {
    const headers = this.config()
    const config = { ...headers, ...conf }
    return axiosInstance.post(url, data, config)
  }
}
