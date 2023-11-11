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
          <span class="retailer-condition">
            <span v-if="discount.condition" class="pi pi-info-circle condition"/>
          </span>
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
  padding: 0.25rem !important;

  .card {
    position: relative;
    border-width: 1px !important;
    border-style: solid;
    border-color: var(--surface-border) !important;
    border-radius: var(--border-radius) !important;
    padding: 8px;
    min-height: 230px;

    .discount {
      position: absolute;
      background: #f5f462;
      font-weight: 700;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12) !important;
      font-size: 14px;
      padding: 2px 12px 2px 4px;
      margin-right: -8px;
      border-radius: 4px 0 0 4px;
      top: 6px;
      right: 8px;
    }

    img.image {
      width: 100%;
      height: 7em;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.12);
      cursor: pointer;
    }
    .cost {
      display: flex;
      align-items: center;
      gap: 6px;
      justify-content: flex-end;

      .new {
        font-weight: 700;
        font-size: 18px;
      }
      .old {
        color: #aaa;
        text-decoration: line-through;
        font-size: 12px;
      }
    }

    .name {
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
    .translate {
      font-size: 10px;
    }
    .retailer {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;

      &-logo {
        height: 16px;
        min-height: 16px;
        width: 16px;
        min-width: 16px;
        object-fit: contain;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03), 0 0 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.12);
      }

      &-name {
        font-size: 12px;
      }
    }
    .date {
      color: #aaa;
      font-size: 10px;
    }
    .condition {
      cursor: pointer;
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

@media screen and (min-width: 800px) {
  .product-grid {
    padding: 0.5rem !important;

    .card {
      padding: 16px;
      min-height: 316px;

      .discount {
        font-size: 20px;
        padding: 4px 24px 4px 8px;
        margin-right: -16px;
        border-radius: 8px 0 0 8px;
        top: 12px;
        right: 16px;
      }

      img.image {
        height: 8.8em;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12);
        }

      .cost {
        gap: 8px;

        .new {
          font-size: 24px;
        }
        .old {
          font-size: 16px;
        }
      }

      .name {
        font-size: 18px;
      }
      .translate {
        font-size: 14px;
      }
      .retailer {
        gap: 8px;

        &-logo {
          height: 24px;
          min-height: 24px;
          width: 24px;
          min-width: 24px;
        }

        &-name {
          font-size: 16px;
        }
      }
      .date {
        font-size: 14px;
      }
    }
  }
}

@media screen and (min-width: 1240px) {
  .product-grid {
    width: 25%;
  }
}
</style>
