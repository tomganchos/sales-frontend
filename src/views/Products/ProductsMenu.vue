<template>
  <PMenu class="grid-container__menu" :model="items" />
</template>

<script>
import { default as PMenu } from 'primevue/menu'
import {mapActions, mapState} from 'pinia'
import { useCategoriesStore } from '@/stores/categories'
import {useDiscountsStore} from "@/stores/discounts";

export default {
  name: "ProductsMenu",

  components: {
    PMenu
  },

  data() {
    return {
      selectedCategory: null
    }
  },
  computed: {
    ...mapState(useCategoriesStore, {
      categories: 'list'
    }),
    items () {
      let array = [
        {
          label: this.$t('categories.all'),
          id: null,
          command: () => {
            this.selectedCategory = null
            this.selectCategory({id: null})
          }
        }
      ]
      this.categories.filter(item => item.parent_id === null).forEach((category) => {
        array.push({
          label: this.$t(`categories.${category.name}`),
          id: category.id,
          command: () => {
            this.selectCategory(category)
          }
        })
      })
      array.forEach(item => delete item.items)
      if (this.selectedCategory && this.categories.length > 0) {
        let c = this.categories.find(item => item.id === parseInt(this.selectedCategory))
        if (c.parent_id) {
          const category = this.categories.find(item => item.id === parseInt(this.selectedCategory))
          const subCategories = this.categories.filter(item => item.parent_id === category.parent_id)
          let mainCategory = array.find(item => item.id === c.parent_id)
          mainCategory.items = subCategories.map(item => {
            return {
              label: this.$t(`categories.${item.name}`),
              id: item.id,
              style: 'margin-left: 16px;',
              command: () => {
                this.selectCategory(item)
              }
            }
          })
        } else {
          const category = array.find(item => item.id === parseInt(this.selectedCategory))
          let subCategories = this.categories.filter(item => item.parent_id === category.id)
          category.items = subCategories.map(item => {
            return {
              label: this.$t(`categories.${item.name}`),
              id: item.id,
              style: 'margin-left: 16px;',
              command: () => {
                this.selectCategory(item)
              }
            }
          })
        }
      } else {
        array[0].items = []
      }

      return array
    }
  },
  async mounted() {
    if (this.categories.length === 0) {
      await this.getCategories()
    }
    if (this.$route.query.c) {
      this.selectedCategory = this.$route.query.c
    } else {
      this.selectedCategory = null
    }
  },
  methods: {
    ...mapActions(useCategoriesStore, {
      getCategories: 'getList'
    }),
    ...mapActions(useDiscountsStore, {
      setParams: 'setParams',
      getDiscounts: 'getList'
    }),
    selectCategory(category) {
      console.log('category: %o', category)
      this.selectedCategory = category.id
      console.log('selectedCategory', this.selectedCategory)
      this.setParams({
        category: category.id ? String(category.id) : null
      })
      this.getDiscounts()
    },
  }
}
</script>

<style>
:deep( .submenu) {
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
