export interface Product {
  id: number
  name_ru: string
  name_ee: string
  name_en: string | null
  image: string
  product_code: string | null
  category_id: number
}
