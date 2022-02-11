import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routerApi from './routes/index.js'

const app = express()
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:8081'
}
app.use(cors(corsOptions))
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

routerApi(app)

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
