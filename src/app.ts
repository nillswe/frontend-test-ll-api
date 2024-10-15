import 'module-alias/register'
import express from 'express'
import dotenv from 'dotenv'
import {router} from '@/routes'

dotenv.config()

const app = express()
const port = process.env.PORT
const authToken = 'fake-token-do-not-delete'

app.use(express.static('public'))

app.use('/', router)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

export {app, authToken}
