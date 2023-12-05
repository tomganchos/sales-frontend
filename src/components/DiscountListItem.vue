<template>
  <div class="product-list" v-if="props.discount.id">
    <img
      :src="props.discount.product.image"
      :alt="props.discount.product.name_ee"
      class="image"
      @click="handleProductClick(props.discount)"
    />
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
    <div class="price">
      <div class="discount">-{{ props.discount.discount_percentage }}%</div>
      <div class="cost">
        <span class="new">{{ props.discount.price_with_sale }}€</span>
        <span class="old">{{ props.discount.price_without_sale }}€</span>
      </div>
    </div>
  </div>
  <div class="product-list" v-else>
    <Skeleton class="skeleton-image" />
    <div class="info">
      <Skeleton class="skeleton-name" />
      <Skeleton class="skeleton-translate" />
    </div>
    <div class="skeleton-price">
      <Skeleton class="skeleton-cost" />
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

<style lang="scss" scoped>
@import "src/assets/commonProductStyles.scss";

.product-list {
  display: flex;
  gap: 8px;
  padding: 8px;
  width: 100%;

  img.image {
    width: 120px;
    height: 100px;
    border-radius: 8px;
  }

  .info {
    flex-grow: 1;
  }

  .price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: 6px;

    .discount {
      position: inherit;
    }
  }

  .skeleton {
    &-image {
      width: 120px !important;
      min-width: 120px;
      height: 100px !important;
      min-height: 100px;
      box-shadow:
          0 4px 10px rgba(0, 0, 0, 0.03),
          0 0 2px rgba(0, 0, 0, 0.06),
          0 2px 6px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
    }
    &-name {
      width: 200px !important;
      height: 24px !important;
      border-radius: 8px;
    }
    &-translate {
      height: 16px !important;
      width: 160px !important;
      margin-top: 8px;
      border-radius: 8px;
    }
    &-price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 8px;
    }
    &-cost {
      height: 32px !important;
      width: 92px !important;
    }
  }
}

@media screen and (min-width: 800px) {
  .product-list {
    gap: 16px;
    padding: 16px;

    img.image {
      width: 120px;
      height: 100px;
    }
  }
}
</style>
