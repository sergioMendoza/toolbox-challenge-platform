import express from 'express'
import FilesService from '../services/files.service.js'
const fileRouter = express.Router()
const service = new FilesService()

fileRouter.get('/data', async (req, res) => {
  const fileName = req.query.fileName
  if (fileName) {
    const fileOne = await service.findOne(fileName)
    res.json(fileOne)
  } else {
    const files = await service.find()
    res.json(files)
  }
})

fileRouter.get('/list', async (req, res) => {
  const files = await service.findOrigen()
  res.json(files)
})

export default fileRouter
