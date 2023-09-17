import Axios from 'axios'
import type { AxiosInstance } from 'axios'

type RequestConstructorParams = {
  baseUrl: string
}

class Api {
  private _baseUrl: string;

  constructor({ baseUrl }: RequestConstructorParams) {
    console.log('_baseUrl: %o', baseUrl)
    this._baseUrl = baseUrl

    this._axiosInstance = Axios.create({
      baseURL: this._baseUrl
    });
  }


}

export const Request = new Api({
  baseUrl: import.meta.env.VITE_API_URL
})
