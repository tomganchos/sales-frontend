import Axios from 'axios'

const api = import.meta.env.VITE_API_URL
export default class RetailersApi {

  getRetailers() {
    return Axios.get(`${api}/retailers`)
  }
}
