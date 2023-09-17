<template>
  <main class="products-view">
    <div>
      <h2>Скидки в магазине Maxima</h2>
      <div class="grid-container">
        <ProductsMenu class="grid-container__menu" />
        <DataTable class="grid-container__table"  />
      </div>
    </div>
  </main>
</template>

<script>
import ProductsMenu from '@/views/Products/ProductsMenu.vue'
import DataTable from '@/views/Products/DataTable.vue'

export default {
  name: "ProductsView",

  components: {
    ProductsMenu,
    DataTable
  },

  created() {
    console.log('ProductsView created')
    console.log('this.$route', this.$route.query)
  }
}
</script>



<style lang="scss" scoped>
.products-view {
  margin: auto;
  padding-top: 72px;

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
  }
}

@media screen and (min-width: 800px) {
  .products-view h2 {
    font-size: 20px;
  }
}

@media screen and (min-width: 1240px) {
  .products-view h2 {
    font-size: 24px;
  }
}

</style>
