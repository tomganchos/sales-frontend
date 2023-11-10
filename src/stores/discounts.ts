import { defineStore } from 'pinia'
import DiscountsApi from '@/api/discounts'
import type { Discount } from '@/helpers/interfaces/Discount'

type DiscountParams = {
  offset: number,
  category: null|string, // category
  retailer: null|string // retailer
  location: null|string // location
}

type DiscountsStore = {
  list: Discount[],
  currentDiscount: Discount|null,
  params: DiscountParams,
  loading: boolean
}
const discountsApi = new DiscountsApi()

export const useDiscountsStore = defineStore('discounts', {
  state: () : DiscountsStore => ({
    list: [],
    currentDiscount: null,
    params: {
      offset: 0,
      category: null,
      retailer: null,
      location: null,
    },
    loading: false,
  }),
  actions: {
    async getList() {
      const { data } = await discountsApi.getDiscounts(this.params) as { data: Discount[] }
      this.list = data.map((item: Discount) => {
        return {
          ...item,
          retailer: {
            ...item.retailer,
            logo: (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${item.retailer.logo}` : item.retailer.logo,
          }
        }
      })
    },

    async getDiscount(id: string) {
      const { data } = await discountsApi.getDiscount(id) as { data: Discount }
      this.currentDiscount = {
        ...data,
        retailer: {
          ...data.retailer,
          logo: (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${data.retailer.logo}` : data.retailer.logo,
        }
      }
    },

    setParams(params: DiscountParams) {
      console.log('PARAMS: %o', params)
      Object.assign(this.params, params)
    }
  }
})
