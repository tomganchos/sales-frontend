import { createI18n } from 'vue-i18n'
import ee from './ee.ts'
import ru from './ru.ts'

const i18n = createI18n({
    locale: 'ru',
    messages: {
      ru,
      ee
    }
})

export default i18n
