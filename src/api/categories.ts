import Axios from 'axios'

const api = import.meta.env.VITE_API_URL
export default class CategoriesApi {

  getCategories() {
    return Axios.get(`${api}/categories`)
  }
}
