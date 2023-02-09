import jwt from 'jsonwebtoken'
import { request, response } from 'express'

export const validateJWT = (req = request, res = response, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({
      ok: false,
      msg: 'there not token in request'
    })
  }

  const [bearer, token] = authorization.split(' ')
  if (bearer !== 'Bearer') {
    return res.status(401).json({
      ok: false,
      msg: 'header authorization invalid'
    })
  }

  try {
    const { name, id } = jwt.verify(token, process.env.SECRECT_TOKEN_JWT)
    req.user = { id, name }
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }

  next()
}
