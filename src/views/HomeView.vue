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
              v-for="category in categories"
              :key="category.id"
              :item="category"
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

export default {
  name: 'HomeView',
  components: {
    CategoryBlock

  },
  data () {
    return {
      emptyRetailers: [{}, {}, {}, {}, {}, {}, {}, {}],

      categories: [
        {
          id: 1,
          name: 'produce_section',
          image: 'src/images/01.jpg'
        },
        {
          id: 2,
          name: 'dairy_section',
          image: 'src/images/02.jpg'
        },
        {
          id: 3,
          name: 'bakery_section',
          image: 'src/images/03.jpg'
        },
        {
          id: 4,
          name: 'water_and_drinks',
          image: 'src/images/04.jpg'
        },
        {
          id: 5,
          name: 'alcohol',
          image: 'src/images/05.jpg'
        },
        {
          id: 6,
          name: 'snack_section',
          image: 'src/images/06.jpg'
        },
        {
          id: 7,
          name: 'meat_poultry_fish',
          image: 'src/images/07.jpg'
        },
        {
          id: 8,
          name: 'frozen_section',
          image: 'src/images/08.jpg'
        },
        {
          id: 10,
          name: 'groceries'
        },
        {
          id: 11,
          name: 'for_children'
        },
        {
          id: 12,
          name: 'pets_section'
        }
      ]
    }
  },
  computed: {
    ...mapState(useRetailersStore, {
      retailers: 'list'
    }),
    cRetailers () {
      if (this.retailers.length > 0) {
        return this.retailers
      } else {
        return this.emptyRetailers
      }
    }
  },
  created() {
    if(!this.retailers.length) {
      this.getRetailers()
    }
  },
  methods: {
    ...mapActions(useRetailersStore, {
      getRetailers: 'getList'
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
