<template>
  <div class="product-list" v-if="discount.id">
    <img
        :src="discount.product.image"
        :alt="discount.product.name_ee"
        class="image"
        @click="handleProductClick(discount)"
    />
    <div class="info">
      <div
          class="name"
          @click="handleProductClick(discount)"
      >{{ discount.product.name_ee }}</div>
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
        {{ getDate(discount.date_end) }}
      </div>
    </div>
    <div class="price">
      <div class="discount">-{{ discount.discount_percentage }}%</div>
      <div class="cost">
        <span class="new">{{ discount.price_with_sale }}€</span>
        <span class="old">{{ discount.price_without_sale }}€</span>
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

<script>
import Skeleton from 'primevue/skeleton'
import { DateTime } from 'luxon'

export default {
  name: "DiscountListItem",

  components: {
    Skeleton
  },
  props: {
    discount: {
      type: Object,
      required: true
    }
  },
  methods: {
    getDate(date) {
      const d = new Date(date)
      return this.$t(`products.until`) + ' ' +
          DateTime.fromJSDate(d).setLocale(this.$i18n.locale).toFormat('dd MMM')
    },
    handleProductClick(product) {
      this.$emit('handleProductClick', product)
    }
  }
}
</script>



<style lang="scss" scoped>
.product-list {
  display: flex;
  gap: 16px;
  padding: 16px;
  width: 100%;

  img {
    width: 120px;
    min-width: 120px;
    height: 100px;
    min-height: 100px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12);

    &.image {
      cursor: pointer;
    }
  }

  .info {
    flex-grow: 1;

    .name {
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
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
        min-height: 24px;
        width: 24px;
        min-width: 24px;
        object-fit: contain;
      }
    }

    .date {
      color: #aaa;
      font-size: 14px;
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: 8px;

    .discount {
      background: #f5f462;
      font-size: 20px;
      font-weight: 700;
      padding: 4px 24px 4px 8px;
      margin-right: -16px;
      border-radius: 8px 0 0 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12) !important;
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
        color: #aaa;
        text-decoration: line-through;
      }
    }
  }

  .skeleton {
    &-image {
      width: 120px !important;
      min-width: 120px;
      height: 100px !important;
      min-height: 100px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12);
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
</style>
