import { defineStore } from 'pinia'
import DiscountsApi from '@/api/discounts.ts'
import type { Discount } from '@/helpers/interfaces/Discount.ts'

type DiscountsStore = {
  list: Discount[],
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
    }
  }
})
