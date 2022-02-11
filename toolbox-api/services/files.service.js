import 'dotenv/config'
import axios from 'axios'
import csvJSON from '../helpers/csv.helper.js'

export default class FilesService {
  async find () {
    const filesData = []
    try {
      const config = {
        headers: { Authorization: `Bearer ${process.env.TBX_API_KEY}` }
      }
      const response = await axios.get(`${process.env.TBX_API}/secret/files`, config)
      const files = response.data.files
      for (let i = 0; i < files.length; i++) {
        const resultFormatted = await this.findOne(files[i])
        if (Object.keys(resultFormatted).length !== 0) {
          filesData.push(resultFormatted)
        }
      }
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        // console.log(error.response.data)
        // console.log(error.response.status)
        // console.log(error.response.headers)
      }
    }
    return filesData
  }

  async findOrigen () {
    let filesDataOrigin = []
    try {
      const config = {
        headers: { Authorization: `Bearer ${process.env.TBX_API_KEY}` }
      }
      const response = await axios.get(`${process.env.TBX_API}/secret/files`, config)
      filesDataOrigin = response.data.files
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        // console.log(error.response.data)
        // console.log(error.response.status)
        // console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message)
      }
    }
    return filesDataOrigin
  }

  async findOne (fileName) {
    let objFile = {}
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.TBX_API_KEY}`,
          responseType: 'blob'
        }
      }
      const response = await axios.get(`${process.env.TBX_API}/secret/file/${fileName}`, config)
      objFile = csvJSON(response.data)
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        // console.log(error.response.data)
        // console.log(error.response.status)
        // console.log(error.response.headers)
      }
    }

    return objFile
  }
}
