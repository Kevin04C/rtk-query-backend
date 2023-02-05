import express from 'express'
import * as dotenv from 'dotenv'
import { connectedDb } from './db/database.js'

dotenv.config()

connectedDb()

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  res.json({
    ok: true
  })
})

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT} 🚀`)
})
