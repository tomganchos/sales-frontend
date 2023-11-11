import { defineStore } from 'pinia'
import DiscountsApi from '@/api/discounts'
import type { Discount } from '@/helpers/interfaces/Discount'

type DiscountParams = {
  offset: number
  category?: null|string
  retailer?: null|string
  location?: null|string
  term?: null|string
}

type DiscountsStore = {
  list: Discount[],
  currentDiscount: Discount|null,
  count: number,
  params: DiscountParams,
  loading: boolean
}
const discountsApi = new DiscountsApi()

export const useDiscountsStore = defineStore('discounts', {
  state: () : DiscountsStore => ({
    list: [],
    currentDiscount: null,
    count: 0,
    params: {
      offset: 0,
      category: null,
      retailer: null,
      location: null,
      term: null
    },
    loading: false,
  }),
  actions: {
    async getList() {
      this.loading = true
      const { data } = await discountsApi.getDiscounts(this.params) as { data: { list: Discount[], count: number }}
      this.list = data.list.map((item: Discount) => {
        return {
          ...item,
          retailer: {
            ...item.retailer,
            logo: (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${item.retailer.logo}` : item.retailer.logo,
          }
        }
      })
      this.count = data.count
      this.loading = false
    },

    async getDiscount(id: string) {
      this.loading = true
      const { data } = await discountsApi.getDiscount(id) as { data: Discount }
      this.currentDiscount = {
        ...data,
        retailer: {
          ...data.retailer,
          logo: (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${data.retailer.logo}` : data.retailer.logo,
        }
      }
      this.loading = false
    },

    setParams(params: DiscountParams) {
      Object.assign(this.params, params)
    }
  }
})
