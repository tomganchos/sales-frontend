<template class="app">
  <HeaderComponent/>

  <RouterView class="main"/>

  <FooterComponent/>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
    RouterView
  },

  mounted () {
    console.log('process.env: %o', import.meta.env)
  }
}
</script>



<style lang="scss" scoped>
  .main {
    margin: auto;
  }

  @media screen and (min-width: 0) {
    .main {
      max-width: 288px;
    }
  }

  @media screen and (min-width: 800px) {
    .main {
      max-width: 720px;
    }
  }

  @media screen and (min-width: 1240px) {
    .main {
      max-width: 1160px;
    }
  }
</style>
