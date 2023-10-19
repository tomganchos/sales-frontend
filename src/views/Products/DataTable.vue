<template>
  <DataView :value="discounts" :layout="layout">
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
      <div class="col-12 product" v-for="discount in discounts" :key="discount.id">
        <img :src="discount.product.image" alt="discount.product.name_ee" />
        <div class="info">
          <div class="name">{{ discount.product.name_ee }}</div>
          <div class="translate">{{ discount.product.name_ru }}</div>
          <div class="retailer">
            <img class="retailer-logo"
                 :src="discount.retailer.logo"
                 :alt="discount.retailer.name"
                 :style="{ background: discount.retailer.color }"
            />
            <span class="retailer-name">{{ discount.retailer.name }}</span>
            <span class="retailer-condition">{{ discount.condition }}</span>
          </div>
          <div class="date">
            kuni {{ discount.date_end }}
          </div>
        </div>
        <div class="price">
          <div class="discount">{{ discount.discount_percentage }}%</div>
          <div class="cost">
            <span class="new">{{ discount.price_with_sale }}€</span>
            <span class="old">{{ discount.price_without_sale }}€</span>
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
import {useProductsStore} from "@/stores/products";
import {mapState} from "pinia";
import {useDiscountsStore} from "@/stores/discounts";

export default {
  name: "DataTable",
  components: {
    DataView,
    DataViewLayoutOptions,
    Skeleton
  },

  data () {
    return {
      layout: 'list',
      // products: [
      //   {
      //     id: '1000',
      //     code: 'f230fh0g3',
      //     name: 'Bamboo Watch',
      //     description: 'Product Description',
      //     image: 'bamboo-watch.jpg',
      //     price: 65,
      //     category: 'Accessories',
      //     quantity: 24,
      //     inventoryStatus: 'INSTOCK',
      //     rating: 5
      //   }
      // ]
    }
  },
  computed: {
    ...mapState(useDiscountsStore, {
      discounts: 'list'
    })
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  gap: 16px;
  padding: 16px;

  img {
    width: 120px;
    height: 100px;
    object-fit: cover;
    border-radius: var(--border-radius) !important;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;
  }

  .info {
    flex-grow: 1;

    .name {
      font-size: 18px;
      font-weight: 600;
    }

    .translate {
      font-size: 14px;
    }

    .retailer {
      display: flex;
      align-items: center;
      gap: 8px;

      &-logo {
        height: 24px;
        width: 24px;
        object-fit: contain;
      }
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;

    .discount {
      background: #f5f462;
      font-size: 20px;
      font-weight: 700;
      padding: 4px 24px 4px 8px;
      margin-right: -16px;
      border-radius: 8px 0 0 8px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;
    }
    .cost {
      display: flex;
      align-items: center;
      gap: 8px;

      .new {
        font-weight: 700;
        font-size: 24px;
      }
      .old {
        color: #777;
        text-decoration: line-through;
      }
    }
  }
}

</style>
