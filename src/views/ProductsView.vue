<template>
  <main class="products-view">
    <div>
      <h2>{{ header }}</h2>
      <div class="grid-container">
        <ProductsMenu class="grid-container__menu" />
        <DataTable class="grid-container__table" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import ProductsMenu from '@/views/Products/ProductsMenu.vue'
import DataTable from '@/views/Products/DataTable.vue'
import { mapActions, mapState } from 'pinia'
import { useDiscountsStore } from '@/stores/discounts'
import { useRetailersStore } from '@/stores/retailers'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductsView',

  components: {
    ProductsMenu,
    DataTable
  },

  data() {
    return {}
  },

  computed: {
    ...mapState(useRetailersStore, {
      RetailersList: 'list'
    }),
    ...mapState(useDiscountsStore, {
      discountsParams: 'params'
    }),
    header(): string {
      if (this.discountsParams.retailer === null) {
        return this.$t('products.header_for_null')
      } else {
        const retailers = this.discountsParams.retailer
          ? this.discountsParams.retailer.split(',')
          : []
        if (retailers.length === 1) {
          if (this.RetailersList.length === 0) return this.$t('products.header_for_null')
          const retailer = this.RetailersList.find((r) => String(r.id) === String(retailers[0]))
          if (!retailer) {
            return this.$t('products.header_for_null')
          }
          return `${this.$t('products.header_for_one_1')} ${retailer.name} ${this.$t(
            'products.header_for_one_2'
          )}`
        } else {
          return this.$t('products.header_for_null')
        }
      }
    }
  },

  created() {
    this.getRetailers()
    this.setParams({
      retailer: Array.isArray(this.$route.query.r)
        ? this.$route.query.r.join(',')
        : this.$route.query.r || null,
      category: Array.isArray(this.$route.query.c)
        ? this.$route.query.c.join(',')
        : this.$route.query.c || null,
      location: Array.isArray(this.$route.query.l)
        ? this.$route.query.l.join(',')
        : this.$route.query.l || null
    })
    this.getDiscounts()
  },
  methods: {
    ...mapActions(useDiscountsStore, {
      getDiscounts: 'getList',
      setParams: 'setParams'
    }),
    ...mapActions(useRetailersStore, {
      getRetailers: 'getList'
    })
  }
})
</script>

<style lang="scss" scoped>
.products-view {
  margin: auto;
  padding-top: 72px;

  h2 {
    margin-top: 16px;
    margin-bottom: 12px;
  }

  .grid-container {
    display: flex;
    align-items: flex-start;
    gap: 40px;

    &__menu {
      width: 280px;
    }

    &__table {
      flex-grow: 1;
    }

    :deep(.grid-container__menu) {
      display: none;
    }

    .grid-container__table {
      :deep(.p-dataview) {
        margin-bottom: 60px;
      }

      :deep(.p-dataview-header) {
        height: 72px;
        padding: 8px 16px;
        display: flex;
        align-items: center;
      }
      :deep(.p-dataview-content) {
        min-height: calc(1000px - 72px);
      }
    }
  }
}

@media screen and (min-width: 800px) {
  .products-view h2 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 16px;
  }
  :deep(.p-dataview) {
    margin-bottom: 60px;
  }

  :deep(.grid-container__menu) {
    display: block !important;
  }
}

@media screen and (min-width: 1240px) {
  .products-view h2 {
    font-size: 24px;
  }
}

@media screen and (max-width: 799px) {
  .products-view {
    max-width: 480px;
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
