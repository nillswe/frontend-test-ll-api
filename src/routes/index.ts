import {authorizationMiddleware} from '@/routes/middleware'
import {db} from '@/services/database/sqlite.config'
import {Request, Response, Router} from 'express'

const router = Router()

router.use(authorizationMiddleware)

router.get('/products', (req: Request, res: Response) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    const response = {
      total: rows.length,
      pageSize: 20,
      totalPages: Math.ceil(rows.length / 20),
      products: rows,
    }

    res.status(200).json(response)
  })
})

router.get('/products/related', (req: Request, res: Response) => {
  db.all('SELECT *  FROM products ORDER BY RANDOM() LIMIT 4', [], (err, rows) => {
    const response = {
      total: rows.length,
      pageSize: 20,
      totalPages: Math.ceil(rows.length / 20),
      products: rows,
    }

    res.status(200).json(response)
  })
})

router.get('/products/:code', (req: Request, res: Response) => {
  const code = req.params.code

  db.get(`SELECT *  FROM products WHERE code = ?`, [code], (err, row) => {
    res.status(200).json(row)
  })
})

export {router}
