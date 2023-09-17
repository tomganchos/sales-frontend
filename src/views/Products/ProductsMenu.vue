<template>
  <PMenu class="grid-container__menu" :model="items" />
</template>

<script>
import { default as PMenu } from 'primevue/menu'

export default {
  name: "ProductsMenu",

  components: {
    PMenu
  },

  data() {
    return {
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus' },
        { label: 'Delete', icon: 'pi pi-fw pi-trash' }
      ]
    }
  },
}
</script>

<style scoped>

</style>
