import { Router } from 'express'
import {
  getTasksByProject,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/Task.js'
import { createTaksValidation, updateTaksValidation } from '../validations/taskValidations.js'

const router = Router()

router.get('/:id', getTasksByProject)
router.post('/', createTaksValidation, createTask)
router.put('/:id', updateTaksValidation, updateTask)
router.delete('/:id', deleteTask)

export default router
