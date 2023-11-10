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
        <span class="retailer-condition">
            <span v-if="discount.condition" class="pi pi-info-circle condition"/>
          </span>
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
  gap: 8px;
  padding: 8px;
  width: 100%;

  img {
    width: 120px;
    min-width: 60px;
    height: 100px;
    min-height: 50px;
    object-fit: contain;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03), 0 0 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 4px;

    &.image {
      cursor: pointer;
    }
  }

  .info {
    flex-grow: 1;

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
      }

      &-name {
        font-size: 12px;
      }
    }

    .date {
      color: #aaa;
      font-size: 10px;
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: 6px;

    .discount {
      background: #f5f462;
      font-size: 14px;
      font-weight: 700;
      padding: 2px 12px 2px 4px;
      margin-right: -8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12) !important;
      border-radius: 4px 0 0 4px;
    }
    .cost {
      display: flex;
      align-items: center;
      gap: 6px;

      .new {
        font-weight: 700;
        font-size: 18px;
      }
      .old {
        font-size: 12px;
        color: #aaa;
        text-decoration: line-through;
      }
    }

    .condition {
      cursor: pointer;
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

@media screen and (min-width: 800px) {
  .product-list {
    gap: 16px;
    padding: 16px;
    width: 100%;

    img {
      width: 120px;
      min-width: 120px;
      height: 100px;
      min-height: 100px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
    }

    .info {
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

    .price {
      gap: 8px;

      .discount {
        font-size: 20px;
        padding: 4px 24px 4px 8px;
        margin-right: -16px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03), 0 0 2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.12) !important;
        border-radius: 8px 0 0 8px;
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
    }
  }
}
</style>
