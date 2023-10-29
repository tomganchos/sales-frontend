import { defineStore } from 'pinia'
import RetailersApi from '@/api/retailers'
import type { Retailer } from '@/helpers/interfaces/Retailer'

type RetailersStore = {
  list: Retailer[],
  loading: boolean
}
const retailersApi = new RetailersApi()

export const useRetailersStore = defineStore('retailers', {
  state: () : RetailersStore => ({
    list: [],
    loading: false,
  }),
  actions: {
    async getList() {
      const list = await retailersApi.getRetailers()
      this.list = list.data.map((item: Retailer) => {
        return {
          ...item,
          logo: (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${item.logo}` : item.logo,
        }
      })
    }
  }
})
