import { products as clips } from "./data-clips.js"
import { products as pendants } from "./data-pendants.js"
import { products as earrings } from "./data-earrings.js"

let products = [{
    "id":clips[9].id,
    "name":clips[9].name,
    "cost":clips[9].cost,
    "text":  clips[9].text,
    "imagePreview":clips[9].imagePreview,
    "image1":clips[9].image1,
    "image2":clips[9].image2,
    "image3":clips[9].image3,
    "instock":clips[9].instock
},{
    "id":clips[10].id,
    "name":clips[10].name,
    "cost":clips[10].cost,
    "text":  clips[10].text,
    "imagePreview":clips[10].imagePreview,
    "image1":clips[10].image1,
    "image2":clips[10].image2,
    "image3":clips[10].image3,
    "instock":clips[10].instock
},{
    "id":clips[11].id,
    "name":clips[11].name,
    "cost":clips[11].cost,
    "text":  clips[11].text,
    "imagePreview":clips[11].imagePreview,
    "image1":clips[11].image1,
    "image2":clips[11].image2,
    "image3":clips[11].image3,
    "instock":clips[11].instock
},{
    "id":clips[12].id,
    "name":clips[12].name,
    "cost":clips[12].cost,
    "text":  clips[12].text,
    "imagePreview":clips[12].imagePreview,
    "image1":clips[12].image1,
    "image2":clips[12].image2,
    "image3":clips[12].image3,
    "instock":clips[12].instockg
},{
    "id":pendants[4].id,
    "name":pendants[4].name,
    "cost":pendants[4].cost,
    "text":pendants[4].text,
    "imagePreview":pendants[4].imagePreview,
    "image1":pendants[4].image1,
    "instock":pendants[4].instock
},{
    "id":"2-22",
    "name":"Серьги 22",
    "cost":"1500 руб.",
    "text":"Заколка автомат с цветами яблони, сирени и ягодами черной смородины. Все ягодки, лепесточки, тычинки вылеплены, тонированы и собраны вручную.",
    "imagePreview":"/images/catalog/earrings/preview/серьги 22.jpg",
    "image1":"/images/catalog/earrings/серьги 22.png",
    "instock":"/images/catalog/notstock.png"

},{
    "id":"2-23",
    "name":"Серьги 23",
    "cost":"12300 руб.",
    "text":"Заколка автомат с цветами яблони, сирени и ягодами черной смородины. Все ягодки, лепесточки, тычинки вылеплены, тонированы и собраны вручную.",
    "imagePreview":"/images/catalog/earrings/preview/серьги 23.jpg",
    "image1":"/images/catalog/earrings/серьги 23.png",
    "image2":"/images/catalog/earrings/серьги 23.1.png",
    "image3":"/images/catalog/earrings/серьги 23.2.png",
    "image4":"/images/catalog/earrings/серьги 23.3.png",
    "instock":"/images/catalog/notstock.png"
},{
    "id":"2-24",
    "name":"Серьги 24",
    "cost":"2400 руб.",
    "text":"Заколка автомат с цветами яблони, сирени и ягодами черной смородины. Все ягодки, лепесточки, тычинки вылеплены, тонированы и собраны вручную.",
    "imagePreview":"/images/catalog/earrings/preview/серьги 24.jpg",
    "image1":"/images/catalog/earrings/серьги 24.png",
    "image2":"/images/catalog/earrings/серьги 24.1.png",
    "image3":"/images/catalog/earrings/серьги 24.2.png",
    "instock":"/images/catalog/notstock.png"

},{
    "id":"2-25",
    "name":"Серьги 25",
    "cost":"1500 руб.",
    "text":"Заколка автомат с цветами яблони, сирени и ягодами черной смородины. Все ягодки, лепесточки, тычинки вылеплены, тонированы и собраны вручную.",
    "imagePreview":"/images/catalog/earrings/preview/серьги 25.jpg",
    "image1":"/images/catalog/earrings/серьги 25.png",
    "image2":"/images/catalog/earrings/серьги 25.1.png",
    "image3":"/images/catalog/earrings/серьги 25.2.png",
    "image4":"/images/catalog/earrings/серьги 25.3.png",
    "instock":"/images/catalog/notstock.png"

},{
    "id":"2-26",
    "name":"Серьги 26",
    "cost":"1500 руб.",
    "text":"Заколка автомат с цветами яблони, сирени и ягодами черной смородины. Все ягодки, лепесточки, тычинки вылеплены, тонированы и собраны вручную.",
    "imagePreview":"/images/catalog/earrings/preview/серьги 26.jpg",
    "image1":"/images/catalog/earrings/серьги 26.png",
    "image2":"/images/catalog/earrings/серьги 26.2.png",
    "instock":"/images/catalog/notstock.png"

},{
    "id":"2-27",
    "name":"Серьги 27",
    "cost":"1500 руб.",
    "text":"Заколка автомат с цветами яблони, сирени и ягодами черной смородины. Все ягодки, лепесточки, тычинки вылеплены, тонированы и собраны вручную.",
    "imagePreview":"/images/catalog/earrings/preview/серьги 27.jpg",
    "image1":"/images/catalog/earrings/серьги 27.png",
    "image2":"/images/catalog/earrings/серьги 27.1.png",
    "image3":"/images/catalog/earrings/серьги 27.1.png",
    "instock":"/images/catalog/notstock.png"

},{
    "id":"2-28",
    "name":"Серьги 28",
    "cost":"1500 руб.",
    "text":"Заколка автомат с цветами яблони, сирени и ягодами черной смородины. Все ягодки, лепесточки, тычинки вылеплены, тонированы и собраны вручную.",
    "imagePreview":"/images/catalog/earrings/preview/серьги 28.jpg",
    "image1":"/images/catalog/earrings/серьги 28.png",
    "image2":"/images/catalog/earrings/серьги 28.1.png",
    "instock":"/images/catalog/notstock.png"

},{
    "id":"2-29",
    "name":"Серьги 29",
    "cost":"1500 руб.",
    "text":"Заколка автомат с цветами яблони, сирени и ягодами черной смородины.",
    "imagePreview":"/images/catalog/earrings/preview/серьги 29.jpg",
    "image1":"/images/catalog/earrings/серьги 29.png",
    "image2":"/images/catalog/earrings/серьги 29.1.png",
    "instock":"/images/catalog/notstock.png"

},{
    "id":"2-30",
    "name":"Серьги 30",
    "cost":"1500 руб.",
    "text":"Заколка автомат с цветами яблони, сирени и ягодами черной смородины. Все ягодки, лепесточки, тычинки вылеплены, тонированы и собраны вручную.",
    "imagePreview":"/images/catalog/earrings/preview/серьги 30.jpg",
    "image1":"/images/catalog/earrings/серьги 30.png",
    "instock":"/images/catalog/notstock.png"
}
]
export default products;