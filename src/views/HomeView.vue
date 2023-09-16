<template>
    <main class="home-view">

      <div class="categories">
        <h2>{{ $t("retailers.title") }}</h2>
        <div class="category-list">
          <CategoryBlock
              v-for="retailer in retailers"
              :key="retailer.id"
              :item="retailer"
              description
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
          />
        </div>
      </div>

    </main>
</template>

<script lang="ts">

import CategoryBlock from '@/components/CategoryBlock.vue'

export default {
  name: 'HomeView',
  components: {
    CategoryBlock

  },
  data () {
    return {
      retailers: [
        {
          id: 1,
          name: 'Maxima',
          logo: 'src/assets/logo/maxima.png',
          color: '#ffffff',
          discountCount: 65
        },
        {
          id: 2,
          name: 'Rimi',
          logo: 'src/assets/logo/rimi.svg',
          color: '#ed1c24',
          discountCount: 60
        },
        {
          id: 3,
          name: 'Prisma',
          logo: 'src/assets/logo/prisma.png',
          color: '#00a650',
          discountCount: 52
        },
        {
          id: 4,
          name: 'Coop',
          logo: 'src/assets/logo/coop.svg',
          color: '#ffffff',
          discountCount: 50
        },
        {
          id: 5,
          name: 'Selver',
          logo: 'src/assets/logo/selver.svg',
          color: '#ffffff',
          discountCount: 44
        },
        {
          id: 6,
          name: 'Grossi',
          logo: 'src/assets/logo/grossi.svg',
          color: '#ffffff',
          discountCount: 41
        },
        {
          id: 7,
          name: 'Araxes',
          logo: 'src/assets/logo/araxes.jpg',
          color: '#992b44',
          discountCount: 33
        },
        {
          id: 8,
          name: 'Lidl',
          logo: 'src/assets/logo/lidl.svg',
          color: '#0066af',
          discountCount: 29
        }
      ],

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
