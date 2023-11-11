<template>
  <header>
    <div class="logo" @click="routeToHome">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <h1 class="name" @click="routeToHome">
      <strong>Hind</strong>
      <span>ikutsikas</span>
    </h1>
    <span class="p-input-icon-left search">
      <i class="pi pi-search" />
      <InputText
          size="small"
          :placeholder="$t('header.search')"
          severity="success"
          @keydown.enter="handleSearch($event.target.value)"
      />
    </span>
    <PButton
        style="display: none;"
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
        @change="selectLanguage"
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
        @click="hiddenMenu = !hiddenMenu"
    />
    <Sidebar v-model:visible="hiddenMenu" position="right">
      <template #closeicon="{ closeCallback }">
        <PButton type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="h-2rem w-2rem"></PButton>
      </template>

      <Dropdown
          v-model="selectedLanguage"
          :options="languages"
          optionLabel="name"
          placeholder="Select a City"
          class="languages-hidden"
          @change="selectLanguage"
      >
        <template #value="slotProps">
          <div class="suggestion">
            <span class="pi pi-globe"></span>
            {{ slotProps.value.name }}
          </div>
        </template>
      </Dropdown>
    </Sidebar>
  </header>
</template>

<script>
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Sidebar from 'primevue/sidebar'
import { default as PButton }  from 'primevue/button'
import { useDiscountsStore } from '@/stores/discounts'
import { mapActions } from 'pinia'

export default {
  name: 'HeaderComponent',
  components: {
    InputText,
    Dropdown,
    PButton,
    Sidebar,
  },
  data() {
    return {
      locale: this.$i18n.locale,
      languages: [
        { name: 'Eesti', value: 'et' },
        { name: 'Русский', value: 'ru' }
      ],
      selectedLanguage: { name: 'Eesti', value: 'et' },
      hiddenMenu: false
    }
  },
  mounted() {
    this.selectedLanguage = this.languages.find(item => item.value === this.$i18n.locale)
  },
  methods: {
    ...mapActions(useDiscountsStore, {
      setParams: 'setParams',
      getDiscounts: 'getList'
    }),
    selectLanguage(value) {
      this.$i18n.locale = value.value.value
    },
    routeToHome() {
      this.$router.push({ name: 'home' })
    },
    handleSearch(value) {
      this.setParams({
        term: value ? value : null
      })
      this.getDiscounts()
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
  padding: 8px;
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
    cursor: pointer;

    img {
      width: 100%
    }
  }
  h1.name {
    font-weight: normal;
    display: none;
    cursor: pointer;
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

  .menu {
    min-width: 48px;
  }
}

.location {
  display: none;
}


.languages {
  height: 42px;
  display: none;
  align-items: center;
  width: 120px;

  :deep( .p-dropdown-trigger) {
    display: none;
  }

  .p-dropdown-label {
    width: 120px;
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

  &-hidden {
    display: flex;
  }
}
@media screen and (min-width: 800px) {
  header {
    padding: 8px 24px;
  }
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
