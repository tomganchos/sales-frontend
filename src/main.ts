import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/lang/i18n'

import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(i18n)

app.mount('#app')
