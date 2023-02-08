import { check } from 'express-validator'
import { fieldValidations } from '../helpers/fieldValidations.js'

export const createTaksValidation = [
  check('title').not().isEmpty(),
  check('description').not().isEmpty(),
  check('project').not().isEmpty(),
  fieldValidations
]
export const updateTaksValidation = [
  check('title').not().isEmpty(),
  check('description').not().isEmpty(),
  check('completed').not().isEmpty(),
  check('project').not().isEmpty(),
  fieldValidations
]
