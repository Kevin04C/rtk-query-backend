import express from 'express'
import * as dotenv from 'dotenv'
import { connectedDb } from './db/database.js'
import authRoutes from './routes/User.routes.js'

dotenv.config()

connectedDb()

const PORT = 3000
const app = express()

app.use(express.json())

app.use('/api/user', authRoutes)

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT} 🚀`)
})
