import jwt from 'jsonwebtoken'

export const generateJwt = ({ _id, name }) => {
  const payload = { id: _id, name }
  try {
    return jwt.sign(payload, process.env.SECRECT_TOKEN_JWT, {
      expiresIn: '12h'
    })
  } catch (error) {
    throw new Error('Error to generate token')
  }
}
