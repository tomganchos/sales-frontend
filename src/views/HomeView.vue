<template>
    <main class="home-view">

      <div class="categories">
        <h2>{{ $t("retailers.title") }}</h2>
        <div class="category-list">
          <CategoryBlock
              v-for="retailer in cRetailers"
              :key="retailer.id"
              :item="retailer"
              :skeleton="!retailer.id"
              description
              @click="handleRetailerClick(retailer)"
          />
        </div>
      </div>

      <div class="categories">
        <h2>{{ $t("categories.title") }}</h2>
        <div class="category-list">
          <CategoryBlock
              v-for="category in cCategories"
              :key="category.id"
              :item="category"
              :skeleton="!category.id"
              label
              @click="handleCategoryClick(category)"
          />
        </div>
      </div>

    </main>
</template>

<script lang="ts">

import CategoryBlock from '@/components/CategoryBlock.vue'
import {mapActions, mapState} from "pinia";
import {useRetailersStore} from "@/stores/retailers";
import {useCategoriesStore} from "@/stores/categories";

export default {
  name: 'HomeView',
  components: {
    CategoryBlock

  },
  data () {
    return {
      emptyRetailers: [{}, {}, {}, {}, {}, {}, {}, {}],
      emptyCategories: [{}, {}, {}, {}, {}, {}, {}, {}],
    }
  },
  computed: {
    ...mapState(useRetailersStore, {
      retailers: 'list',
      counts: 'counts'
    }),
    ...mapState(useCategoriesStore, {
      categories: 'mainList'
    }),
    cRetailers () {
      if (this.retailers.length > 0) {
        if (this.counts) {
          return this.retailers.map((retailer: any) => {
            const count = this.counts.find((item: any) => item.id_retailer === retailer.id)
            if (count) {
              retailer.discountCount = count.discountcount
            } else {
              retailer.discountCount = 0
            }
            return retailer
          })
        } else {
          return this.retailers
        }
      } else {
        return this.emptyRetailers
      }
    },
    cCategories () {
      if (this.categories.length > 0) {
        return this.categories
      } else {
        return this.emptyCategories
      }
    }
  },
  created() {
    if(!this.retailers.length) {
      this.getRetailers()
    }
    if(!this.categories.length) {
      this.getCategories()
    }
    if (!this.counts.length) {
      this.getCounts()
    }
  },
  methods: {
    ...mapActions(useRetailersStore, {
      getRetailers: 'getList',
      getCounts: 'getCounts'
    }),
    ...mapActions(useCategoriesStore, {
      getCategories: 'getList'
    }),
    handleRetailerClick(retailer: any) {
      console.log('retailer: %o', retailer)
      this.$router.push({ name: 'products', query: { r: retailer.id }})
    },
    handleCategoryClick(category: any) {
      console.log('category: %o', category)
      this.$router.push({ name: 'products', query: { c: category.id }})
    }
  }
}
</script>

<style lang="scss" scoped>

.home-view {
  margin: auto;
  padding-top: 72px;

  .categories {
    margin: 10px 0 40px;

    h2 {
      font-weight: bold;
      margin-bottom: 16px;
    }

    .category-list {
      display: flex;
      flex-wrap: wrap;
      gap: 48px 24px;


    }
  }
}

@media screen and (min-width: 800px) {
  .home-view {
    .categories {
      margin: 20px 0 60px;

      h2 {
        font-size: 20px;
      }

      .category-list {
        gap: 50px 30px;
      }
    }
  }
}

@media screen and (min-width: 1240px) {
  .home-view {
    .categories {

      h2 {
        font-size: 24px;
      }

      .category-list {
        gap: 60px 40px;
      }
    }
  }
}

</style>
