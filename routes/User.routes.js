
import { Router } from 'express'
import { createUser, loginUser, renewToken } from '../controllers/User.js'
import { validateJWT } from '../middlewares/validateJWT.js'
import { validationCreateUser, validationLoginUser } from '../validations/userValidations.js'

// route api/user
const router = Router()

router.post('/create', validationCreateUser, createUser)
router.post('/login', validationLoginUser, loginUser)
router.get('/renew', validateJWT, renewToken)

export default router
