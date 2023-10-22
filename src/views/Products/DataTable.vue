<template>
  <DataView :value="cDiscounts" :layout="layout">
    <template #header>
      <div class="flex justify-content-end">
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
import Paginator from 'primevue/paginator';

import { mapState } from 'pinia'
import { useDiscountsStore } from '@/stores/discounts'

import { DateTime } from 'luxon'

import DiscountListItem from '@/components/DiscountListItem.vue'
import DiscountGridItem from '@/components/DiscountGridItem.vue'

export default {
  name: "DataTable",
  components: {
    DiscountGridItem,
    DiscountListItem,
    DataView,
    DataViewLayoutOptions,
    Paginator
  },

  data () {
    return {
      layout: 'list',
      emptyDiscounts: [{}, {}, {}]
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
      console.log('product: %o', product)
    },
    getDate(date) {
      const d = new Date(date)
      return this.$t(`products.until`) + ' ' +
          DateTime.fromJSDate(d).setLocale(this.$i18n.locale).toFormat('dd MMM')
    }
  }
}
</script>
