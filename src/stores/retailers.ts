import { defineStore } from 'pinia'
import RetailersApi from '@/api/retailers.ts'
import type { Retailer } from '@/helpers/interfaces/Retailer.ts'

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
      console.log('list: %o', list)
      const STRING = '/images/1.png'
      console.log('import.meta.env.VITE_API_URL: %o', (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${STRING}` : STRING)
      this.list = list.data.map((item: Retailer) => {
        console.log('!!import.meta.env.VITE_API_URL: %o', (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${item.logo}` : item.logo)
        return {
          ...item,
          logo: (import.meta.env.VITE_API_URL) ? `${import.meta.env.VITE_API_URL}${item.logo}` : item.logo,
        }
      })
    }
  }
})
