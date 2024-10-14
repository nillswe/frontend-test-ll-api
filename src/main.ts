import { Request, Response } from "express";
import express from "express"
import dotenv from "dotenv"
import { products } from "./data.mock";


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static('public'))


app.get('/products', (req: Request, res: Response) => {
  res.status(200).json(products)
});

app.get('/products/:slug', (req: Request, res: Response) => {
  const slug = req.params.slug
  const product = products.find(product => product.slug === slug) ?? null

  res.status(200).json(product)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});