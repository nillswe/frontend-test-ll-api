import { Request, Response } from "express";
import express from "express"
import dotenv from "dotenv"
import { products } from "./data.mock";


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static('public'))


app.get('/products', (req: Request, res: Response) => {
  res.json(products).status(200)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});