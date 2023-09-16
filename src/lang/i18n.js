import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'ru',
    messages: {
      ru: {
        retailers: {
          title: 'Магазины со скидками'
        },
        categories: {
          title: 'Скидки по категориям',
          produce_section: 'Овощной прилавок',
          dairy_section: 'Молочный прилавок',
          bakery_section: 'Булочная',
          water_and_drinks: 'Вода и напитки',
          alcohol: 'Алкоголь',
          snack_section: 'Сладкое и снеки',
          meat_poultry_fish: 'Мясо, птица, рыба',
          frozen_section: 'Заморозка',
          groceries: 'Бакалея',
          for_children: 'Для детей',
          pets_section: 'Для животных'
        }
      },
      ee: {
        retailers: {
          title: 'Allahinnatud kauplused'
        },
        categories: {
          title: 'Allahindlused kategooriate kaupa',
          produce_section: 'Köögiviljalett',
          dairy_section: 'Piimaloendur',
          bakery_section: 'Pagariäri',
          water_and_drinks: 'Vesi ja joogid',
          alcohol: 'Alkohol',
          snack_section: 'Maiustused ja suupisted',
          meat_poultry_fish: 'Liha, linnuliha, kala',
          frozen_section: 'Külmutage',
          groceries: 'Toidupood',
          for_children: 'Lastele',
          pets_section: 'Loomade jaoks'
        }
      }
    }
})

export default i18n
