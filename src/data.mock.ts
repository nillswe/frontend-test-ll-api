import dotenv from "dotenv"
dotenv.config();


const basePath = process.env.APP_URL
const appPort  = process.env.PORT
const fullUrl =  `${basePath}:${appPort}`

export const products = [
  {
    id: 1,
    slug: 'bermuda-mizuno-root-mesh-masculina',
    name: "Bermuda Mizuno Root Mesh Masculina",
    pictureUrl: `${fullUrl}/products/product.webp`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae nemo non aliquam officiis facere.',
    rating: 4.5,
    oldPrice: 299.99,
    price: 178.00
  },
  {
    id: 2,
    slug: 'tenis-puma-deviate-nitro-2-psychedelic-rush-feminino-preto',
    name: "Tênis Puma Deviate Nitro 2 Psychedelic Rush Feminino - Preto",
    pictureUrl: `${fullUrl}/products/product2.webp`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae nemo non aliquam officiis facere.',
    rating: 3.2,
    oldPrice: 299.99,
    price: 160.00
  },
  {
    id: 3,
    slug: 'camisa-real-madrid-third-2425-sn°-torcedor-adidas-masculina',
    name: "Camisa Real Madrid Third 24/25 s/n° Torcedor Adidas Masculina",
    pictureUrl: `${fullUrl}/products/product3.webp`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae nemo non aliquam officiis facere.',
    rating: 5,
    oldPrice: 299.99,
    price: 99.00
  },
  {
    id: 4,
    slug: 'camisa-palmeiras-iii-2425-sn°-torcedor-puma-masculina',
    name: "Camisa Palmeiras III 24/25 sn° Torcedor Puma Masculina",
    pictureUrl: `${fullUrl}/products/product4.webp`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae nemo non aliquam officiis facere.',
    rating: 1.4,
    oldPrice: 299.99,
    price: 260.00
  },
  {
    id: 5,
    slug: 'tenis-adidas-breaknet-masculino',
    name: "Tênis Adidas Breaknet Masculino",
    pictureUrl: `${fullUrl}/products/product5.webp`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae nemo non aliquam officiis facere.',
    rating: 0.5,
    oldPrice: 299.99,
    price: 160.00
  },
  {

    id: 6,
    slug: 'jaqueta-puma-style-feminina',
    name: "Jaqueta Puma Style Feminina",
    pictureUrl: `${fullUrl}/products/product6.webp`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae nemo non aliquam officiis facere.',
    rating: 0.3,
    oldPrice: 299.99,
    price: 160.00
  },
  {
    id: 7,
    slug: 'moletom-adidas-essentials-3-listras-masculino',
    name: "Moletom Adidas Essentials 3 Listras Masculino",
    pictureUrl: `${fullUrl}/products/product7.webp`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae nemo non aliquam officiis facere.',
    rating: 5,
    oldPrice: 299.99,
    price: 160.00
  },
  {
    id: 8,
    slug: 'moletom-adidas-preto-masculino',
    name: "Moletom Adidas preto masculino",
    pictureUrl: `${fullUrl}/products/product8.webp`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae nemo non aliquam officiis facere.',
    rating: 3.8,
    oldPrice: 299.99,
    price: 160.00
  },
]