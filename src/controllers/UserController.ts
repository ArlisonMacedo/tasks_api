import knex from '../database/connection'
import bcrypt from 'bcrypt'
// eslint-disable-next-line
import { Request, Response } from 'express'

export const store = async (request: Request, response: Response) => {
  const { name, email, password } = request.body

  const alreadyUser = await knex('users').where('email', email).select('*').first()

  if (alreadyUser) {
    return response.status(400).send('Email Already')
  }

  const passwordHash = await bcrypt.hash(password, 8)
  const user = await knex('users').insert({
    name,
    email,
    password: passwordHash
  })

  // if (!user) {
  //   return response.status(400).send('Email Already')
  // }

  return response.json(user)
}

export const login = async (request: Request, response: Response) => {
  const { email, password } = request.body

  const user = await knex('users')
    .where('email', email)
    .select('*')

  if (user.length === 1) {
    if (await bcrypt.compare(password, user[0].password)) {
      return response.json({ user })
    }
  }

  return response.status(401).send()
}
