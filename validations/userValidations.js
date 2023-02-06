import { check } from 'express-validator'
import { fieldValidations } from '../helpers/fieldValidations.js'

export const validationCreateUser = [
  check('name').not().isEmpty(),

  check('email').not().isEmpty().isEmail(),

  check('password').not().isEmpty().isLength({ min: 6 }),
  fieldValidations
]
export const validationLoginUser = [
  check('email').not().isEmpty().isEmail(),

  check('password').not().isEmpty().isLength({ min: 6 }),
  fieldValidations
]
