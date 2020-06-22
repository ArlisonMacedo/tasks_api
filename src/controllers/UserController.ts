import knex from '../database/connection'
import bcrypt from 'bcrypt'
// eslint-disable-next-line
import { Request, Response } from 'express'

export const store = async (request: Request, response: Response) => {
  const { name, email, password } = request.body
  const passwordHash = await bcrypt.hash(password, 8)
  const user = await knex('users').insert({
    name,
    email,
    password: passwordHash
  })

  return response.json(user)
}
