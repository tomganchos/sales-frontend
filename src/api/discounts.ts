import Axios from 'axios'

const api = import.meta.env.VITE_API_URL
export default class DiscountsApi {
  getDiscounts(params: any) {
    console.log('PARAMS: %o', params)
    // MOCK DATA
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: [{"id":1,"id_retailer":1,"id_product":2,"date_start":"2023-08-15","date_end":"2023-08-21","price_with_sale":"0.99","price_without_sale":"1.99","discount_percentage":50,"condition":"only_app","retailer":{"id":1,"name":"Maxima","logo":"/images/retailers/maxima.png","color":"#ffffff"},"product":{"id":2,"name_ru":"Ананас, 1 кг","name_ee":"Ananass, 1 kg","name_en":null,"image":"https://www.maxima.ee/uploads/sale/2023/sales_page/10/17/Artboard-13.jpg","product_code":null,"category_id":16}},{"id":2,"id_retailer":1,"id_product":3,"date_start":"2023-08-15","date_end":"2023-08-21","price_with_sale":"0.49","price_without_sale":"0.69","discount_percentage":29,"condition":null,"retailer":{"id":1,"name":"Maxima","logo":"/images/retailers/maxima.png","color":"#ffffff"},"product":{"id":3,"name_ru":"Хурма, 1 кг","name_ee":"Hurmaa, 1 kg","name_en":null,"image":"https://www.maxima.ee/uploads/sale/2023/sales_page/10/17/Artboard-3.jpg","product_code":null,"category_id":16}},{"id":3,"id_retailer":1,"id_product":4,"date_start":"2023-10-10","date_end":"2023-10-16","price_with_sale":"1.19","price_without_sale":"1.99","discount_percentage":40,"condition":null,"retailer":{"id":1,"name":"Maxima","logo":"/images/retailers/maxima.png","color":"#ffffff"},"product":{"id":4,"name_ru":"Тёмный виноград, 1 кг","name_ee":"Tume viinamari, 1 kg","name_en":null,"image":"https://www.maxima.ee/uploads/sale/2023/sales_page/08/28/Artboard-8.jpg","product_code":"","category_id":16}},{"id":4,"id_retailer":3,"id_product":6,"date_start":"2023-10-25","date_end":"2023-11-01","price_with_sale":"0.99","price_without_sale":"1.09","discount_percentage":10,"condition":null,"retailer":{"id":3,"name":"Prisma","logo":"/images/retailers/prisma.png","color":"#00a650"},"product":{"id":6,"name_ru":"Coca-Cola безалкогольный напиток, 500мл","name_ee":"Coca-Cola karastusjook, 500ml","name_en":null,"image":"https://s3-eu-west-1.amazonaws.com/balticsimages/images/320x480/d934911c2cc3522f7f3d04cd808f8c54.png","product_code":null,"category_id":27}}]
    //     })
    //   }, 1000)
    // })

    return Axios.get(`${api}/discounts`)
  }
  getDiscount(id: string) {
    // MOCK DATA
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: [{"id":1,"id_retailer":1,"id_product":2,"date_start":"2023-08-15","date_end":"2023-08-21","price_with_sale":"0.99","price_without_sale":"1.99","discount_percentage":50,"condition":"only_app","retailer":{"id":1,"name":"Maxima","logo":"/images/retailers/maxima.png","color":"#ffffff"},"product":{"id":2,"name_ru":"Ананас, 1 кг","name_ee":"Ananass, 1 kg","name_en":null,"image":"https://www.maxima.ee/uploads/sale/2023/sales_page/10/17/Artboard-13.jpg","product_code":null,"category_id":16}},{"id":2,"id_retailer":1,"id_product":3,"date_start":"2023-08-15","date_end":"2023-08-21","price_with_sale":"0.49","price_without_sale":"0.69","discount_percentage":29,"condition":null,"retailer":{"id":1,"name":"Maxima","logo":"/images/retailers/maxima.png","color":"#ffffff"},"product":{"id":3,"name_ru":"Хурма, 1 кг","name_ee":"Hurmaa, 1 kg","name_en":null,"image":"https://www.maxima.ee/uploads/sale/2023/sales_page/10/17/Artboard-3.jpg","product_code":null,"category_id":16}},{"id":3,"id_retailer":1,"id_product":4,"date_start":"2023-10-10","date_end":"2023-10-16","price_with_sale":"1.19","price_without_sale":"1.99","discount_percentage":40,"condition":null,"retailer":{"id":1,"name":"Maxima","logo":"/images/retailers/maxima.png","color":"#ffffff"},"product":{"id":4,"name_ru":"Тёмный виноград, 1 кг","name_ee":"Tume viinamari, 1 kg","name_en":null,"image":"https://www.maxima.ee/uploads/sale/2023/sales_page/08/28/Artboard-8.jpg","product_code":"","category_id":16}},{"id":4,"id_retailer":3,"id_product":6,"date_start":"2023-10-25","date_end":"2023-11-01","price_with_sale":"0.99","price_without_sale":"1.09","discount_percentage":10,"condition":null,"retailer":{"id":3,"name":"Prisma","logo":"/images/retailers/prisma.png","color":"#00a650"},"product":{"id":6,"name_ru":"Coca-Cola безалкогольный напиток, 500мл","name_ee":"Coca-Cola karastusjook, 500ml","name_en":null,"image":"https://s3-eu-west-1.amazonaws.com/balticsimages/images/320x480/d934911c2cc3522f7f3d04cd808f8c54.png","product_code":null,"category_id":27}}]
    //         .find(item => item.id === Number(id))
    //     })
    //   }, 1000)
    // })
    return Axios.get(`${api}/discounts/${id}`)
  }
}
