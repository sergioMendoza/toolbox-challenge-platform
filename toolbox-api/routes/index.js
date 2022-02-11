import express from 'express'
import fileRouter from './files.router.js'

export default function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/files', fileRouter)
}
