import { defineStore } from 'pinia'
import CategoriesApi from '@/api/categories'
import type { Category } from '@/helpers/interfaces/Category'

type CategoriesStore = {
  mainList: Category[]
  list: Category[]
  loading: boolean
}
const categoriesApi = new CategoriesApi()

export const useCategoriesStore = defineStore('categories', {
  state: (): CategoriesStore => ({
    mainList: [],
    list: [],
    loading: false
  }),
  actions: {
    async getList() {
      const list = await categoriesApi.getCategories()
      this.list = list.data.map((item: Category) => {
        return {
          ...item,
          image: import.meta.env.VITE_API_URL
            ? `${import.meta.env.VITE_API_URL}${item.image}`
            : item.image
        }
      })
      this.mainList = list.data
        .filter((item: Category) => item.parent_id === null)
        .map((item: Category) => {
          return {
            ...item,
            image: import.meta.env.VITE_API_URL
              ? `${import.meta.env.VITE_API_URL}${item.image}`
              : item.image
          }
        })
    }
  }
})
