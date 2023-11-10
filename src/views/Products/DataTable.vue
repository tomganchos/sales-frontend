<template>
  <DataView :value="cDiscounts" :layout="layout">
    <template #header>
      <div class="table-header flex justify-content-between">

        <PButton
            class="menu-button"
            size="small"
            icon="pi pi-bars"
            outlined
            @click="hiddenMenu = !hiddenMenu"
        />
        <div class="filters">
          Filters
        </div>

        <Sidebar v-model:visible="hiddenMenu" class="sidebar">
          <template #closeicon="{ closeCallback }">
            <PButton
                type="button"
                @click="closeCallback"
                icon="pi pi-times"
                rounded
                outlined
                class="h-2rem w-2rem"
            />
          </template>
          <ProductsMenu class="hidden-menu" />
        </Sidebar>

        <DataViewLayoutOptions v-model="layout" severity="success" />
      </div>
    </template>

    <template #list="slotProps">
      <DiscountListItem
          :discount="slotProps.data"
          @handleProductClick="handleProductClick"
      />
    </template>

    <template #grid="slotProps">
      <DiscountGridItem
          :discount="slotProps.data"
          @handleProductClick="handleProductClick"
      />
    </template>

    <template #footer>
      <Paginator :rows="16" :totalRecords="95"></Paginator>
    </template>
  </DataView>
</template>

<script>
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Paginator from 'primevue/paginator'
import Sidebar from 'primevue/sidebar'
import { default as PButton }  from 'primevue/button'

import { mapState } from 'pinia'
import { useDiscountsStore } from '@/stores/discounts'

import { DateTime } from 'luxon'

import DiscountListItem from '@/components/DiscountListItem.vue'
import DiscountGridItem from '@/components/DiscountGridItem.vue'
import ProductsMenu from "@/views/Products/ProductsMenu.vue";

export default {
  name: "DataTable",
  components: {
    ProductsMenu,
    DiscountGridItem,
    DiscountListItem,
    DataView,
    DataViewLayoutOptions,
    Paginator,
    PButton,
    Sidebar,
  },

  data () {
    return {
      layout: 'grid',
      emptyDiscounts: [{}, {}, {}],
      hiddenMenu: false,
    }
  },
  computed: {
    ...mapState(useDiscountsStore, {
      discounts: 'list'
    }),
    cDiscounts () {
      if (this.discounts.length > 0) {
        return this.discounts
      } else {
        return this.emptyDiscounts
      }
    }
  },

  methods: {
    handleProductClick(product) {
      this.$router.push('/products/' + product.id)
    },
    getDate(date) {
      const d = new Date(date)
      return this.$t(`products.until`) + ' ' +
          DateTime.fromJSDate(d).setLocale(this.$i18n.locale).toFormat('dd MMM')
    }
  }
}
</script>

<style lang="scss">
.table-header {
  flex-grow: 1;
}
.p-sidebar {
  width: 100% !important;
}

.hidden-menu {
  border: none;
}
.filters {
  display: none;
}
button.menu-button {
  background: white !important;
}
@media screen and (min-width: 800px) {
  button.menu-button {
    display: none;
  }
  .filters {
    display: flex;
  }
}
</style>
