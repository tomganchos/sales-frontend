<template>
  <div class="product-grid" v-if="props.discount.id">
    <div class="card">
      <div class="discount">-{{ props.discount.discount_percentage }}%</div>
      <img
        :src="props.discount.product.image"
        :alt="props.discount.product.name_ee"
        class="image"
        @click="handleProductClick(props.discount)"
      />
      <div class="cost">
        <span class="new">{{ props.discount.price_with_sale }}€</span>
        <span class="old">{{ props.discount.price_without_sale }}€</span>
      </div>
      <div class="info">
        <div class="name" @click="handleProductClick(props.discount)">
          {{ props.discount.product.name_ee }}
        </div>
        <div class="translate">{{ props.discount.product.name_ru }}</div>
        <div class="retailer">
          <img
            class="retailer-logo"
            :src="props.discount.retailer.logo"
            :alt="props.discount.retailer.name"
            :style="{ background: props.discount.retailer.color }"
          />
          <span class="retailer-name">{{ props.discount.retailer.name }}</span>
          <span class="retailer-condition">
            <span v-if="props.discount.condition" class="pi pi-info-circle condition" />
          </span>
        </div>
        <div class="date">
          {{ getDate(props.discount.date_end) }}
        </div>
      </div>
    </div>
  </div>
  <div class="product-grid" v-else>
    <div class="card">
      <Skeleton class="skeleton-image" />
      <div class="skeleton-price">
        <Skeleton class="skeleton-cost" />
      </div>
      <Skeleton class="skeleton-name" />
      <Skeleton class="skeleton-translate" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Skeleton from 'primevue/skeleton'
import type { Discount } from '@/helpers/interfaces/Discount'
import { getDate, handleProductClick } from '@/helpers/useTableHandles'

const props = defineProps({
  discount: {
    type: Object as () => Discount,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import "src/assets/commonProductStyles.scss";

.product-grid {
  width: 50%;
  padding: 0.25rem !important;

  img.image {
    width: 100%;
    height: 7em;
    border-radius: 8px;
  }

  .skeleton {
    &-image {
      width: 100% !important;
      min-width: 120px;
      min-height: 132px;
      box-shadow:
          0 4px 10px rgba(0, 0, 0, 0.03),
          0 0 2px rgba(0, 0, 0, 0.06),
          0 2px 6px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
    }
    &-name {
      width: 160px !important;
      height: 24px !important;
      border-radius: 8px;
    }
    &-translate {
      height: 16px !important;
      width: 120px !important;
      margin-top: 8px;
      border-radius: 8px;
    }
    &-price {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 16px;
      margin-top: 16px;
    }
    &-cost {
      height: 32px !important;
      width: 92px !important;
    }
  }
}

@media screen and (min-width: 1240px) {
  .product-grid {
    width: 25%;
  }
}
</style>
