import bcypt from 'bcrypt'
import { User } from '../models/User.js'
import { response, request } from 'express'
import { generateJwt } from '../helpers/jwt.js'
import { encryptPassword } from '../helpers/encryptPassword.js'

export const createUser = async (req = request, res = response) => {
  const { name, email, password } = req.body

  try {
    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({
        ok: false,
        msg: 'there already user with these email'
      })
    }

    const user = new User({ name, email, password })
    user.password = encryptPassword(password)
    await user.save()
    const token = generateJwt(user)

    res.status(201).json({
      ok: true,
      user: {
        id: user._id,
        name
      },
      token
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }
}

export const loginUser = async (req = request, res = response) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'email Incorret'
      })
    }

    const passwordCompare = bcypt.compareSync(password, user.password)

    if (!passwordCompare) {
      return res.status(400).json({
        ok: false,
        msg: 'password Incorret'
      })
    }
    const token = generateJwt(user)

    res.json({
      ok: true,
      user: {
        id: user._id,
        name: user.name
      },
      token
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    })
  }
}

export const renewToken = (req = request, res = response) => {
  const { name, id } = req.user
  const token = generateJwt({ name, _id: id })
  res.send({
    ok: true,
    user: {
      id,
      name
    },
    token
  })
}
