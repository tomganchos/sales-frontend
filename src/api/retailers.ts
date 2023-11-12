import Axios from 'axios'

const api = import.meta.env.VITE_API_URL

export default class RetailersApi {
  getRetailers() {
    // MOCK DATA
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: [
    //         {"id":4,"name":"Coop","logo":"/images/retailers/coop.svg","color":"#ffffff"},{"id":5,"name":"Selver","logo":"/images/retailers/selver.svg","color":"#ffffff"},{"id":3,"name":"Prisma","logo":"/images/retailers/prisma.png","color":"#00a650"},{"id":7,"name":"Araxes","logo":"/images/retailers/araxes.jpg","color":"#992b44"},{"id":2,"name":"Rimi","logo":"/images/retailers/rimi.svg","color":"#ed1c24"},{"id":6,"name":"Grossi","logo":"/images/retailers/grossi.svg","color":"#ffffff"},{"id":1,"name":"Maxima","logo":"/images/retailers/maxima.png","color":"#ffffff"},{"id":8,"name":"Lidl","logo":"/images/retailers/lidl.svg","color":"#0066af"}
    //       ]})
    //   }, 1000)
    // })

    return Axios.get(`${api}/retailers`)
  }
  getRetailersDiscountCounts() {
    return Axios.get(`${api}/retailers/counts`)
  }
}
