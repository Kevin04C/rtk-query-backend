import { Router } from 'express'
import { createProject, deleteProject, getProjectsByUser } from '../controllers/Project.js'
import { createProjectValidation } from '../validations/projectValidations.js'

// api/project

const router = Router()

router.get('/:id', getProjectsByUser)
router.post('/', createProjectValidation, createProject)
router.delete('/:id', deleteProject)

export default router
