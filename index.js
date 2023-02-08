import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { connectedDb } from './db/database.js'
import { validateJWT } from './middlewares/validateJWT.js'
import authRoutes from './routes/User.routes.js'
import projectsRoutes from './routes/Project.routes.js'
import TaskRoutes from './routes/Task.routes.js'

dotenv.config()

connectedDb()

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user', authRoutes)
app.use('/api/projects', validateJWT, projectsRoutes)
app.use('/api/task', validateJWT, TaskRoutes)

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT} 🚀`)
})
