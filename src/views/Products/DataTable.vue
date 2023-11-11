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
        <div class="filters"/>

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

    <template #empty>
      <div class="empty">Скидок нет :(</div>
    </template>

    <template #footer>
      <Paginator
          :rows="16"
          :totalRecords="discountCount"
          @update:first="updatePage"
      />
    </template>
  </DataView>
</template>

<script>
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Paginator from 'primevue/paginator'
import Sidebar from 'primevue/sidebar'
import { default as PButton }  from 'primevue/button'

import { mapActions, mapState } from 'pinia'
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
      discounts: 'list',
      discountLoading: 'loading',
      discountCount: 'count'
    }),
    cDiscounts () {
      if (this.discountLoading) {
        return this.emptyDiscounts
      } else {
        return this.discounts
      }
    }
  },

  methods: {
    ...mapActions(useDiscountsStore, {
      setParams: 'setParams',
      getDiscounts: 'getList'
    }),
    handleProductClick(product) {
      this.$router.push('/products/' + product.id)
    },
    getDate(date) {
      const d = new Date(date)
      return this.$t(`products.until`) + ' ' +
          DateTime.fromJSDate(d).setLocale(this.$i18n.locale).toFormat('dd MMM')
    },
    updatePage(pageNumber) {
      this.setParams({
        offset: pageNumber ? String(pageNumber) : null
      })
      this.getDiscounts()
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
.empty {
  padding: 16px;
  font-weight: 700;
}
.p-paginator-page.p-highlight {
  background: rgba(34, 197, 94, 0.04) !important;
  border-color: rgba(34, 197, 94, 0.16) !important;
  color: #22C55E !important;
}
button.p-paginator-element {
  &:focus {
    box-shadow: 0 0 0 0.2rem #22C55E;
  }

  svg {
    border: none !important;
  }
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
