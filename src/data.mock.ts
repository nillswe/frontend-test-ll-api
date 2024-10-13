import dotenv from "dotenv"
dotenv.config();


const basePath = process.env.APP_URL
const appPort  = process.env.PORT
const fullUrl =  `${basePath}:${appPort}`

export const products = [
  {
    id: 1,
    name: "Bermuda Mizuno Root Mesh Masculina",
    pictureUrl: `${fullUrl}/products/product.webp`,
    rating: 4.5,
    oldPrice: 299.99,
    price: 178.00
  },
  {
    id: 2,
    name: "Tênis Puma Deviate Nitro 2 Psychedelic Rush Feminino - Preto",
    pictureUrl: `${fullUrl}/products/product2.webp`,
    rating: 3.2,
    oldPrice: 299.99,
    price: 160.00
  },
  {
    id: 3,
    name: "Camisa Real Madrid Third 24/25 s/n° Torcedor Adidas Masculina",
    pictureUrl: `${fullUrl}/products/product3.webp`,
    rating: 5,
    oldPrice: 299.99,
    price: 99.00
  },
  {
    id: 4,
    name: "Camisa Palmeiras III 24/25 sn° Torcedor Puma Masculina",
    pictureUrl: `${fullUrl}/products/product4.webp`,
    rating: 1.4,
    oldPrice: 299.99,
    price: 260.00
  },
  {
    id: 5,
    name: "Tênis Adidas Breaknet Masculino",
    pictureUrl: `${fullUrl}/products/product5.webp`,
    rating: 0.5,
    oldPrice: 299.99,
    price: 160.00
  },
  {

    id: 6,
    name: "Jaqueta Puma Style Feminina",
    pictureUrl: `${fullUrl}/products/product6.webp`,
    rating: 0.3,
    oldPrice: 299.99,
    price: 160.00
  },
  {
    id: 7,
    name: "Moletom Adidas Essentials 3 Listras Masculino",
    pictureUrl: `${fullUrl}/products/product7.webp`,
    rating: 5,
    oldPrice: 299.99,
    price: 160.00
  },
  {
    id: 8,
    name: "Moletom Adidas Essentials 3 Listras Masculino",
    pictureUrl: `${fullUrl}/products/product8.webp`,
    rating: 3.8,
    oldPrice: 299.99,
    price: 160.00
  },
]