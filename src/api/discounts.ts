import Axios from 'axios'

const api = import.meta.env.VITE_API_URL
export default class DiscountsApi {
  getDiscounts(params: any) {
    console.log('PARAMS: %o', params)
    return Axios.get(`${api}/discounts`)
  }
  getDiscount(id: string) {
    return Axios.get(`${api}/discounts/${id}`)
  }
}
