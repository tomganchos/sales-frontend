import type {Retailer} from "@/helpers/interfaces/Retailer";
import type {Product} from "@/helpers/interfaces/Product";

export interface Discount {
  id: number,
  id_retailer: number,
  id_product: number,
  date_start: string,
  date_end: string,
  price_with_sale: string,
  price_without_sale: string,
  discount_percentage: number,
  condition: string,
  retailer: Retailer,
  product: Product
}
