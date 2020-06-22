import express from 'express'
import { store } from './controllers/UserController'
import {
  taskStore,
  taskDelete,
  taskIndex,
  taksCompleted,
  taksIndexCompleted
} from './controllers/TaskController'

const routes = express.Router()

// const userController = new UserController()

routes.post('/v1/api/users', store)

// Tarefas

routes.get('/v1/api/tasks', taskIndex)
routes.post('/v1/api/tasks', taskStore)
routes.get('/v1/api/tasks/completed', taksIndexCompleted)
routes.put('/v1/api/tasks/:id', taksCompleted)
routes.delete('/v1/api/tasks/:id', taskDelete)

export default routes
