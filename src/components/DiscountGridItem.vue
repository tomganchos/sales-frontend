<template>
  <div class="product-grid" v-if="discount.id">
    <div class="card">
      <div class="discount">-{{ discount.discount_percentage }}%</div>
      <img
          :src="discount.product.image"
          :alt="discount.product.name_ee"
          class="image"
          @click="handleProductClick(discount)"
      />
      <div class="cost">
        <span class="new">{{ discount.price_with_sale }}€</span>
        <span class="old">{{ discount.price_without_sale }}€</span>
      </div>
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

<script>
import Skeleton from 'primevue/skeleton'
import { DateTime } from 'luxon'

export default {
  name: "DiscountGridItem",

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

<style scoped lang="scss">
.product-grid {
  width: 50%;
  padding: 0.5rem !important;

  .card {
    position: relative;
    border-width: 1px !important;
    border-style: solid;
    border-color: var(--surface-border) !important;
    border-radius: var(--border-radius) !important;
    padding: 16px;
    min-height: 316px;

    .discount {
      position: absolute;
      background: #f5f462;
      font-size: 20px;
      font-weight: 700;
      padding: 4px 24px 4px 8px;
      margin-right: -16px;
      border-radius: 8px 0 0 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12) !important;
      top: 12px;
      right: 16px;
    }

    img.image {
      width: 100%;
      min-width: 120px;
      object-fit: cover;
      min-height: 100px;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12);
    }
    .cost {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: flex-end;

      .new {
        font-weight: 700;
        font-size: 24px;
      }
      .old {
        color: #aaa;
        text-decoration: line-through;
      }
    }

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
      margin-top: 8px;

      &-logo {
        height: 24px;
        min-height: 24px;
        width: 24px;
        min-width: 24px;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12);
      }
    }
    .date {
      color: #aaa;
      font-size: 14px;
    }
  }

  .skeleton {
    &-image {
      width: 100% !important;
      min-width: 120px;
      min-height: 132px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12);
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
