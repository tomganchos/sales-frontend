import { defineEmits } from 'vue'
import { DateTime } from 'luxon'
import i18n from '@/lang/i18n'
import type { Discount } from '@/helpers/interfaces/Discount'

export function getDate(date: string): string {
  const d = new Date(date)
  return DateTime.fromJSDate(d).setLocale(i18n.global.locale).toFormat('dd MMM')
}

const emit = defineEmits(['handleProductClick'])

export function handleProductClick(product: Discount) {
  emit('handleProductClick', product)
}
