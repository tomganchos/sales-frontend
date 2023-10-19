import { defineStore } from 'pinia'
import ProductsApi from '@/api/products.ts'
import type { Product } from '@/helpers/interfaces/Product.ts'

type ProductsStore = {
  list: Product[],
  loading: boolean
}
const productsApi = new ProductsApi()

export const useProductsStore = defineStore('products', {
  state: () : ProductsStore => ({
    list: [],
    loading: false,
  }),
  actions: {
    async getList() {
      const { data } = await productsApi.getProducts(this.params)
      console.log('list: %o', data)
      this.list = data
      console.log('list: %o', this.list)
    }
  }
})
