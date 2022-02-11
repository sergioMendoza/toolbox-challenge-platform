import express from 'express'
import FilesService from '../services/files.service.js'
const fileRouter = express.Router()
const service = new FilesService()

fileRouter.get('/data', async (req, res) => {
  const files = await service.find()
  res.json(files)
})

export default fileRouter
