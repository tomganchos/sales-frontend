<template>
  <DataView :value="products" :layout="layout">
    <template #header>
      <div class="flex justify-content-end">
        <DataViewLayoutOptions v-model="layout" severity="success" />
      </div>
    </template>

    <template #list>
      <div class="col-12">
        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <Skeleton class="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
          <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <Skeleton class="w-8rem border-round h-2rem" />
              <Skeleton class="w-6rem border-round h-1rem" />
              <div class="flex align-items-center gap-3">
                <Skeleton class="w-6rem border-round h-1rem" />
                <Skeleton class="w-3rem border-round h-1rem" />
              </div>
            </div>
            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <Skeleton class="w-4rem border-round h-2rem" />
              <Skeleton shape="circle" class="w-3rem h-3rem" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <Skeleton class="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
          <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <Skeleton class="w-8rem border-round h-2rem" />
              <Skeleton class="w-6rem border-round h-1rem" />
              <div class="flex align-items-center gap-3">
                <Skeleton class="w-6rem border-round h-1rem" />
                <Skeleton class="w-3rem border-round h-1rem" />
              </div>
            </div>
            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <Skeleton class="w-4rem border-round h-2rem" />
              <Skeleton shape="circle" class="w-3rem h-3rem" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <Skeleton class="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
          <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <Skeleton class="w-8rem border-round h-2rem" />
              <Skeleton class="w-6rem border-round h-1rem" />
              <div class="flex align-items-center gap-3">
                <Skeleton class="w-6rem border-round h-1rem" />
                <Skeleton class="w-3rem border-round h-1rem" />
              </div>
            </div>
            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <Skeleton class="w-4rem border-round h-2rem" />
              <Skeleton shape="circle" class="w-3rem h-3rem" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <Skeleton class="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
          <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <Skeleton class="w-8rem border-round h-2rem" />
              <Skeleton class="w-6rem border-round h-1rem" />
              <div class="flex align-items-center gap-3">
                <Skeleton class="w-6rem border-round h-1rem" />
                <Skeleton class="w-3rem border-round h-1rem" />
              </div>
            </div>
            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <Skeleton class="w-4rem border-round h-2rem" />
              <Skeleton shape="circle" class="w-3rem h-3rem" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <Skeleton class="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
          <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <Skeleton class="w-8rem border-round h-2rem" />
              <Skeleton class="w-6rem border-round h-1rem" />
              <div class="flex align-items-center gap-3">
                <Skeleton class="w-6rem border-round h-1rem" />
                <Skeleton class="w-3rem border-round h-1rem" />
              </div>
            </div>
            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <Skeleton class="w-4rem border-round h-2rem" />
              <Skeleton shape="circle" class="w-3rem h-3rem" />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #grid>
      <div class="col-3 p-2">
        <div class="p-4 border-1 surface-border surface-card border-round">
          <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <Skeleton class="w-6rem border-round h-2rem" />
            <Skeleton class="w-3rem border-round h-1rem" />
          </div>
          <div class="flex flex-column align-items-center gap-3 py-5">
            <Skeleton class="w-9 shadow-2 border-round h-10rem" />
            <Skeleton class="w-8rem border-round h-2rem" />
            <Skeleton class="w-6rem border-round h-1rem" />
          </div>
          <div class="flex align-items-center justify-content-between">
            <Skeleton class="w-4rem border-round h-2rem" />
            <Skeleton shape="circle" class="w-3rem h-3rem" />
          </div>
        </div>
      </div>
      <div class="col-3 p-2">
        <div class="p-4 border-1 surface-border surface-card border-round">
          <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <Skeleton class="w-6rem border-round h-2rem" />
            <Skeleton class="w-3rem border-round h-1rem" />
          </div>
          <div class="flex flex-column align-items-center gap-3 py-5">
            <Skeleton class="w-9 shadow-2 border-round h-10rem" />
            <Skeleton class="w-8rem border-round h-2rem" />
            <Skeleton class="w-6rem border-round h-1rem" />
          </div>
          <div class="flex align-items-center justify-content-between">
            <Skeleton class="w-4rem border-round h-2rem" />
            <Skeleton shape="circle" class="w-3rem h-3rem" />
          </div>
        </div>
      </div>
      <div class="col-3 p-2">
        <div class="p-4 border-1 surface-border surface-card border-round">
          <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <Skeleton class="w-6rem border-round h-2rem" />
            <Skeleton class="w-3rem border-round h-1rem" />
          </div>
          <div class="flex flex-column align-items-center gap-3 py-5">
            <Skeleton class="w-9 shadow-2 border-round h-10rem" />
            <Skeleton class="w-8rem border-round h-2rem" />
            <Skeleton class="w-6rem border-round h-1rem" />
          </div>
          <div class="flex align-items-center justify-content-between">
            <Skeleton class="w-4rem border-round h-2rem" />
            <Skeleton shape="circle" class="w-3rem h-3rem" />
          </div>
        </div>
      </div>
      <div class="col-3 p-2">
        <div class="p-4 border-1 surface-border surface-card border-round">
          <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <Skeleton class="w-6rem border-round h-2rem" />
            <Skeleton class="w-3rem border-round h-1rem" />
          </div>
          <div class="flex flex-column align-items-center gap-3 py-5">
            <Skeleton class="w-9 shadow-2 border-round h-10rem" />
            <Skeleton class="w-8rem border-round h-2rem" />
            <Skeleton class="w-6rem border-round h-1rem" />
          </div>
          <div class="flex align-items-center justify-content-between">
            <Skeleton class="w-4rem border-round h-2rem" />
            <Skeleton shape="circle" class="w-3rem h-3rem" />
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script>
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Skeleton from 'primevue/skeleton'

export default {
  name: "DataTable",
  components: {
    DataView,
    DataViewLayoutOptions,
    Skeleton
  },

  data () {
    return {
      layout: 'grid',
      products: [
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>