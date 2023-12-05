<template>
  <main class="product-view">
    <div class="back-button" @click="handleBack">&#60; Вернуться назад</div>
    <Card>
      <template #content>
        <img
          class="image"
          v-if="discount"
          :src="discount.product.image"
          :alt="discount.product.name_ee"
        />
        <Skeleton v-else class="skeleton-image" />
        <div class="context">
          <div v-if="discount" class="info">
            <div class="retailer">
              <img
                class="retailer-logo"
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
          <div v-if="discount" class="name">
            {{ discount.product.name_ee }}
          </div>
          <div v-if="discount" class="translate">
            {{ discount.product.name_ru }}
          </div>
          <div v-if="discount" class="price">
            <span class="new"> {{ discount.price_with_sale }}€ </span>
            <span class="discount"> -{{ discount.discount_percentage }}% </span>
            <span class="old"> {{ discount.price_without_sale }}€ </span>
          </div>
        </div>
      </template>
    </Card>

    <div class="same-list" style="display: none">
      <h2 style="margin-top: 20px; margin-bottom: 16px; font-size: 24px">Похожие товары</h2>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'pinia'
import { useDiscountsStore } from '@/stores/discounts'
import { DateTime } from 'luxon'
import Card from 'primevue/card'
import Skeleton from 'primevue/skeleton'

export default defineComponent({
  name: 'ProductView',
  components: {
    Card,
    Skeleton
  },
  mounted() {
    if (!this.discount) {
      console.log('this.$route: %o', this.$route)
      this.getDiscount(this.$route.params.discountId as string)
    }
  },
  computed: {
    ...mapState(useDiscountsStore, {
      discount: 'currentDiscount'
    })
  },
  methods: {
    ...mapActions(useDiscountsStore, {
      getDiscount: 'getDiscount'
    }),
    getDate(date: string) {
      const d = new Date(date)
      return (
        this.$t(`products.until`) +
        ' ' +
        DateTime.fromJSDate(d).setLocale(this.$i18n.locale).toFormat('dd MMM')
      )
    },
    handleBack() {
      this.$router.push({ name: 'products' })
    }
  }
})
</script>

<style scoped lang="scss">
.product-view {
  margin: auto;
  padding-top: 72px;
  min-height: calc(100vh - 72px);

  .back-button {
    padding: 16px 0;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  :deep(.p-card) {
    padding: 16px;

    .p-card-body {
      padding: 0;

      .p-card-content {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .context {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      img {
        width: 256px;
        box-shadow:
          0 4px 10px rgba(0, 0, 0, 0.03),
          0 0 2px rgba(0, 0, 0, 0.06),
          0 2px 6px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
      }

      .info {
        order: 2;
      }

      .retailer {
        display: flex;
        align-items: center;
        gap: 8px;

        &-logo {
          height: 28px;
          min-height: 28px;
          width: 28px;
          min-width: 28px;
          object-fit: contain;
          box-shadow:
            0 4px 10px rgba(0, 0, 0, 0.03),
            0 0 2px rgba(0, 0, 0, 0.06),
            0 2px 6px rgba(0, 0, 0, 0.12);
          border-radius: 8px;
        }
        &-name {
          font-size: 18px;
        }
      }

      .date {
        color: #aaa;
        font-size: 16px;
        margin-left: 36px;
      }

      .name {
        font-size: 24px;
        font-weight: 600;
      }
      .translate {
        font-size: 16px;
      }
      .price {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 16px 0;

        .new {
          font-weight: 700;
          font-size: 32px;
        }
        .discount {
          background: #f5f462;
          font-size: 20px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 8px;
          box-shadow:
            0 4px 10px rgba(0, 0, 0, 0.03),
            0 0 2px rgba(0, 0, 0, 0.06),
            0 2px 6px rgba(0, 0, 0, 0.12) !important;
        }
        .old {
          color: #aaa;
          text-decoration: line-through;
          font-size: 20px;
        }
      }
    }
  }
}
@media screen and (min-width: 1240px) {
  .product-view {
    padding: 72px 120px 0;
  }
}
@media screen and (min-width: 800px) {
  :deep(.p-card-content) {
    display: flex;
    flex-direction: row !important;
    gap: 16px;
  }
  .info {
    order: 0 !important;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .price {
    margin-bottom: 0 !important;
  }
}
</style>
