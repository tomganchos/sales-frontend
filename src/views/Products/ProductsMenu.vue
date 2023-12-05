<template>
  <PMenu class="grid-container__menu" :model="items" />
</template>

<script lang="ts">
import { default as PMenu } from 'primevue/menu'
import { mapActions, mapState } from 'pinia'
import { useCategoriesStore } from '@/stores/categories'
import { useDiscountsStore } from '@/stores/discounts'
import type { Category } from '@/helpers/interfaces/Category'

interface MenuItem {
  label: string
  id: number | null
  command?: () => void
  items?: MenuItem[] // Теперь это использует интерфейс MenuItem вместо typeof array
  style?: string
}

export default {
  name: 'ProductsMenu',

  components: {
    PMenu
  },

  data() {
    return {
      selectedCategory: null as number | null
    }
  },

  computed: {
    ...mapState(useCategoriesStore, {
      categories: 'list'
    }),
    items(): MenuItem[] {
      let array: MenuItem[] = [
        {
          label: this.$t('categories.all'),
          id: null,
          command: () => {
            this.selectCategory(null)
          }
        }
      ]
      this.categories
        .filter((item: Category) => item.parent_id === null)
        .forEach((category: Category) => {
          array.push({
            label: this.$t(`categories.${category.name}`),
            id: category.id,
            command: () => {
              this.selectCategory(category.id)
            }
          })
        })

      if (this.selectedCategory !== null && this.categories.length > 0) {
        const c = this.categories.find((item: Category) => item.id === this.selectedCategory)
        if (c && c.parent_id !== null) {
          const subCategories = this.categories.filter(
            (item: Category) => item.parent_id === c.parent_id
          )
          let mainCategory = array.find((item) => item.id === c.parent_id)
          if (mainCategory) {
            mainCategory.items = subCategories.map((subCategory: Category) => ({
              label: this.$t(`categories.${subCategory.name}`),
              id: subCategory.id,
              style: 'margin-left: 16px;',
              command: () => {
                this.selectCategory(subCategory.id)
              }
            }))
          }
        } else if (c) {
          const subCategories = this.categories.filter((item: Category) => item.parent_id === c.id)
          let category = array.find((item) => item.id === c.id)
          if (category) {
            category.items = subCategories.map((subCategory: Category) => ({
              label: this.$t(`categories.${subCategory.name}`),
              id: subCategory.id,
              style: 'margin-left: 16px;',
              command: () => {
                this.selectCategory(subCategory.id)
              }
            }))
          }
        }
      }

      return array
    }
  },

  async mounted() {
    if (this.categories.length === 0) {
      await this.getCategories()
    }
    const categoryId = this.$route.query.c
    this.selectedCategory = typeof categoryId === 'string' ? parseInt(categoryId, 10) : null
  },

  methods: {
    ...mapActions(useCategoriesStore, {
      getCategories: 'getList'
    }),
    ...mapActions(useDiscountsStore, {
      setParams: 'setParams',
      getDiscounts: 'getList'
    }),
    selectCategory(categoryId: number | null) {
      this.selectedCategory = categoryId
      this.setParams({
        category: categoryId !== null ? String(categoryId) : null
      })
      this.getDiscounts()
    }
  }
}
</script>

<style>
:deep(.submenu) {
  margin-left: 16px;
}
.grid-container__menu {
  min-width: 200px;
}
.p-menu ul {
  padding: 0;
}

li {
  padding: 0;
  line-height: 1.4 !important;
}
li span {
  line-height: 1.3 !important;
}
</style>
