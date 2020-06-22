import knex from '../database/connection'

// eslint-disable-next-line
import {Request,Response} from 'express'

export const taskIndex = async (request: Request, response: Response) => {
  const id = request.headers.authorization
  const user = await knex('users')
    .where('id', String(id))
    .select('*')
    .first()

  if (!user) {
    return response.json({ message: 'User not found' })
  }
  const tasks = await knex('tasks')
    .join('users', 'users.id', 'tasks.user_id')
    .where('users.id', String(user.id))

    .select('tasks.*', 'users.name', 'users.email')

  if (!tasks) {
    return response.status(404).send()
  }

  return response.json(tasks)
}

export const taskStore = async (request: Request, response: Response) => {
  const id = request.headers.authorization
  // eslint-disable-next-line
  const user = await knex('users')
    .where('id', String(id))
    .select('*')
    .first()
  // eslint-disable-next-line
  if (!user) {
    return response.json({ error: 'Not found User with is ID' })
  }
  // eslint-disable-next-line
  const user_id = user.id
  const { title, description } = request.body

  const task = await knex('tasks').insert({
    title,
    description,
    user_id
  })

  return response.json(task)
}

export const taksCompleted = async (request: Request, response: Response) => {
  const { id } = request.params
  const tasks = await knex('tasks').update({
    completed: true
  }).where('id', id)

  return response.json(tasks)
}

export const taksIndexCompleted = async (request: Request, response: Response) => {
  // eslint-disable-next-line
  const user_id = request.headers.authorization
  const user = await knex('users')
    .where('id', String(user_id))
    .select('*')
    .first()

  if (!user) {
    return response.status(404).send()
  }

  const tasks = await knex('tasks')
    .join('users', 'users.id', 'tasks.user_id')
    .where('users.id', String(user.id))
    .where('completed', true)
    .select('tasks.*')

  return response.json(tasks)
}

export const taskDelete = async (request: Request, response: Response) => {
  const { id } = request.params
  // eslint-disable-next-line
  const user_id = request.headers.authorization

  const user = await knex('users')
    .where('id', String(user_id))
    .select('*')
    .first()

  if (!user) {
    return response.status(400).send()
  }

  const task = await knex('tasks')
    .where('id', String(id))
    .select('*')
    .first()

  if (!task) {
    return response.status(400).send()
  }

  await knex('tasks').where('id', String(task.id)).delete()

  return response.status(204).send()
}
