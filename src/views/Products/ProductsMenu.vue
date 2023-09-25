<template>
  <PMenu class="grid-container__menu" :model="items" />
</template>

<script>
import { default as PMenu } from 'primevue/menu'
import { mapState } from 'pinia'
import { useCategoriesStore } from '@/stores/categories'

export default {
  name: "ProductsMenu",

  components: {
    PMenu
  },

  data() {
    return {
      selectedCategory: null,
      items1: [
        { label: 'New' },
        { label: 'Delete' },
        { label: this.$t('categories.produce_section') },
        { label: 'Алкоголь', items: [
            {
              label: 'Beer'
            },
            {
              label: 'Wine'
            }
          ]
        }
      ]
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
          }
        }
      ]
      this.categories.filter(item => item.parent_id === null).forEach((category) => {
        array.push({
          label: this.$t(`categories.${category.name}`),
          id: category.id,
          command: () => {
            console.log('category: %o', category)
            this.selectedCategory = category
            console.log('selectedCategory', this.selectedCategory)
          }
        })
      })
      array.forEach(item => delete item.items)
      if (this.selectedCategory) {
        let c = array.find(item => item.id === this.selectedCategory.id)
        c.items = this.categories.filter(item => item.parent_id === this.selectedCategory.id).map(item => {
          return {
            label: this.$t(`categories.${item.name}`),
            id: item.id,
            command: () => {
              console.log('category: %o', item)
              this.selectedCategory = item
              console.log('selectedCategory', this.selectedCategory)
            }
          }
        })
      } else {
        array[0].items = []
      }

      return array
    }
  },
  mounted() {
    console.log('this.$route: %o', this.$route)
    if (this.$route.query.c) {
      this.selectedCategory = this.categories.find(item => item.id === this.$route.query.c)
    } else {
      this.selectedCategory = null
    }
  }
}
</script>

<style scoped>

</style>
