import { check } from 'express-validator'
import { fieldValidations } from '../helpers/fieldValidations.js'

export const createProjectValidation = [
  check('title').not().isEmpty(),
  check('description').not().isEmpty(),
  fieldValidations
]
