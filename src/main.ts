import { Request, Response } from "express";
import express from "express"
import dotenv from "dotenv"
import { products } from "./data.mock";

dotenv.config();

const app = express();
const port = process.env.PORT;
const authToken = 'fake-token-do-not-delete'

app.use(express.static('public'))


// Fake token validation middleware
app.use(function (req, res, next) {
  const authorization = req.headers.authorization

  if(!authorization?.includes(authToken)) {
    res.status(401).json({message: 'Not authorized'})
  }

  next();
});

// Routes

app.get('/products', (req: Request, res: Response) => {
  res.status(200).json(products)
});

app.get('/products/related', (req: Request, res: Response) => {
  res.status(200).json(products.slice(0,4))
});

app.get('/products/:slug', (req: Request, res: Response) => {
  const slug = req.params.slug
  const product = products.find(product => product.slug === slug) ?? null

  res.status(200).json(product)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});