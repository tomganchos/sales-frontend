import { defineStore } from 'pinia'
import DiscountsApi from '@/api/discounts'
import type { Discount } from '@/helpers/interfaces/Discount'

type DiscountsStore = {
  list: Discount[],
  currentDiscount: Discount|null,
  params: {
    offset: number,
    c: null|string,
    r: null|string,
  },
  loading: boolean
}
const discountsApi = new DiscountsApi()

export const useDiscountsStore = defineStore('discounts', {
  state: () : DiscountsStore => ({
    list: [],
    currentDiscount: null,
    params: {
      offset: 0,
      c: null,
      r: null,
    },
    loading: false,
  }),
  actions: {
    async getList() {
      const { data } = await discountsApi.getDiscounts(this.params)
      console.log('list: %o', data)
      const logo = '/images/retailers/maxima.png'
      console.log('import.meta.env.VITE_API_URL: %o', `${import.meta.env.VITE_API_URL}${logo}`)
      this.list = data.map((item: Discount) => {
        return {
          ...item,
          retailer: {
            ...item.retailer,
            logo: (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${item.retailer.logo}` : item.retailer.logo,
          }
        }
      })
      console.log('list: %o', this.list)
    },

    async getDiscount(id: string) {
      const { data } = await discountsApi.getDiscount(id)
      console.log('discount: %o', data)
      this.currentDiscount = {
        ...data,
        retailer: {
          ...data.retailer,
          logo: (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${data.retailer.logo}` : data.retailer.logo,
        }
      }
    }
  }
})
