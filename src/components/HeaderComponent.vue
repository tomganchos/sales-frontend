<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <h1 class="name">
      <strong>Hind</strong>
      <span>ikutsikas</span>
    </h1>
    <span class="p-input-icon-left search">
      <i class="pi pi-search" />
      <InputText size="small" placeholder="Поиск.." severity="success" />
    </span>
    <PButton
        class="location"
        label="Tallinn"
        size="small"
        icon="pi pi-map-marker"
        outlined
    />
    <Dropdown
        v-model="selectedLanguage"
        :options="languages"
        optionLabel="name"
        placeholder="Select a City"
        class="languages"
    >
      <template #value="slotProps">
        <div class="suggestion">
          <span class="pi pi-globe"></span>
          {{ slotProps.value.name }}
        </div>
      </template>
    </Dropdown>
    <PButton
        class="menu"
        label=""
        size="small"
        icon="pi pi-bars"
        outlined
    />
  </header>
</template>

<script>
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import { default as PButton }  from 'primevue/button'

export default {
  name: 'HeaderComponent',
  components: {
    InputText,
    Dropdown,
    PButton
  },
  data() {
    return {
      selectedLanguage: { name: 'Eesti', value: 'ee' },
      languages: [
        { name: 'Eesti', value: 'ee' },
        { name: 'Русский', value: 'ru' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 10;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 24px;
  background-color: #fff;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 0 16px 8px #f0f0f1;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    min-width: 48px;
    background-color: #22C55E;
    color: #ffffff;
    border-radius: 50%;

    img {
      width: 100%
    }
  }
  h1.name {
    font-weight: normal;
    display: none;
  }
  .search {
    margin-left: auto;
    display: flex;
    flex-grow: 1;

    input {
      display: flex;
      flex-grow: 1;
    }
  }
}

.location {
  display: none;
}

.languages {
  height: 42px;
  display: none;
  align-items: center;
  width: 100px;

  :deep( .p-dropdown-trigger) {
    display: none;
  }

  .p-dropdown-label {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .suggestion {
    display: flex;
    align-items: center;

    .pi-globe {
      margin-right: 8px;
    }
  }
}
@media screen and (min-width: 800px) {
  header h1.name {
    display: flex;
  }
  .location {
    display: flex;
  }
  .languages {
    display: flex;
  }
  .menu {
    display: none;
  }
}
</style>
