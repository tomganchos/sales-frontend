import Axios from 'axios'

export default class RetailersApi {

  getRetailers() {
    return Axios.get('http://localhost:3000/retailers')
  }
}
