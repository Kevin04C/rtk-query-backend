import express from 'express'
import * as dotenv from 'dotenv'
import { connectedDb } from './db/database.js'
import authRoutes from './routes/User.routes.js'
import projectsRoutes from './routes/Project.routes.js'
import { validateJWT } from './middlewares/validateJWT.js'

dotenv.config()

connectedDb()

const PORT = 3000
const app = express()

app.use(express.json())

app.use('/api/user', authRoutes)
app.use('/api/projects', validateJWT, projectsRoutes)

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT} 🚀`)
})
