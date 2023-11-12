import { createI18n } from 'vue-i18n'
import et from './et.ts'
import ru from './ru.ts'

const i18n = createI18n({
    locale: 'et',
    messages: {
      et,
      ru
    }
})

export default i18n
