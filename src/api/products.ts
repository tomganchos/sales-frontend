import Axios from 'axios'

const api = import.meta.env.VITE_API_URL
export default class ProductsApi {
    getProducts(params: any) {
      console.log('PARAMS: %o', params)
      return Axios.get(`${api}/products`)
    }
}
