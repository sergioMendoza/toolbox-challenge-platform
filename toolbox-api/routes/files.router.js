import express from 'express'
const fileRouter = express.Router()

fileRouter.get('/data', (req, res) => {
  res.json({ message: 'Welcome to toolbox application.' })
})

export default fileRouter
