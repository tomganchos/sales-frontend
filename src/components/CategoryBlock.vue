<template>
  <Skeleton
      v-if="skeleton"
      :width="styles.width"
      :height="styles.height"
      :borderRadius="styles.borderRadius"
  />
  <div
      v-else
      ref="category"
      :key="item.id"
       :style="{ backgroundColor: item.color }"
       class="category">
    <span class="label"
          v-if="label">
      {{ $t(`categories.${item.name}`) }}
    </span>
    <img v-if="item.logo"
         class="logo"
        :src="item.logo"
        :alt="item.name"
    >
    <img v-else-if="item.image"
         class="image"
        :src="item.image"
        :alt="item.name"
         >
    <span class="description"
          v-if="description">
      {{ item.discountCount }} {{ $t('retailers.promotions') }}
    </span>
  </div>
</template>

<script>
import Skeleton from 'primevue/skeleton'

export default {
  name: "CategoryBlock",
  components: {
    Skeleton
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    description: {
      type: Boolean,
      default: false
    },
    label: {
      type: Boolean,
      default: false
    },
    skeleton: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles() {
      if (window.innerWidth >= 1240) {
        return {
          width: '160px',
          height: '160px',
          borderRadius: '40px'
        }
      } else if (window.innerWidth >= 800) {
        return {
          width: '120px',
          height: '120px',
          borderRadius: '30px'
        }
      } else {
        return {
          width: '80px',
          height: '80px',
          borderRadius: '20px'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 16px 8px #f0f0f1;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;

  & img.logo {
    max-height: 60%;
    width: 80%;
  }

  & img.image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  & span.label {
    position: absolute;
    top: 0;
    left: 0;
    color: #00c655;
    font-weight: bold;
    font-size: 10px;
    padding: 8px;
    line-height: 1.4;
    z-index: 1;
  }

  & span.description {
    position: absolute;
    font-size: 12px;
    bottom: -24px;
    font-weight: bold;
    left: 2px;
  }

  &:hover, &:focus {
    box-shadow: 0 0 16px 8px #e3e3e4;
  }
}

@media screen and (min-width: 800px) {
  .category {
    width: 120px;
    height: 120px;
    border-radius: 30px;

    & span.label {
      font-size: 16px;
      padding: 12px;
    }

    & span.description {
      font-size: 14px;
      bottom: -28px;
      left: 12px;
    }
  }
}
@media screen and (min-width: 1240px) {
  .category {
    width: 160px;
    height: 160px;
    border-radius: 40px;

    & span.label {
      font-size: 18px;
      padding: 16px;
    }

    & span.description {
      left: 16px;
    }
  }
}

</style>
