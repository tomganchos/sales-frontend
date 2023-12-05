import { defineStore } from 'pinia'
import ProductsApi from '@/api/products'
import type { Product } from '@/helpers/interfaces/Product'

type ProductsStore = {
  list: Product[]
  loading: boolean
}
const productsApi = new ProductsApi()

export const useProductsStore = defineStore('products', {
  state: (): ProductsStore => ({
    list: [],
    loading: false
  }),
  actions: {
    async getList() {
      const { data } = await productsApi.getProducts()
      console.log('list: %o', data)
      this.list = data
      console.log('list: %o', this.list)
    }
  }
})
