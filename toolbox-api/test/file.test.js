import chai, { assert, expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../server.js'
import csvJSON from '../helpers/csv.helper.js'

// Configure chai
chai.use(chaiHttp)
chai.should()

const permittedCSV = `file,text,number,hex
file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765
file1.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5
file1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3e29651a63a5202a5661e05a060401fb
file1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252`

describe('CSV Formatter', () => {
  it('should be correct format', (done) => {
    const formatted = csvJSON(permittedCSV)
    assert.isNotEmpty(formatted)
    expect(formatted).to.have.all.keys('file', 'lines')
    assert.isNotEmpty(formatted.file)
    assert.isArray(formatted.lines)
    done()
  })
})

describe('Files', () => {
  describe('GET /files/data?fileName', () => {
    it('get a specific file', (done) => {
      chai.request(app)
        .get('/api/v1/files/data?fileName=file1.csv')
        .end((err, res) => {
          if (!err) {
            res.should.have.status(200)
            res.body.should.be.a('object')
          }
          done()
        })
    })
  })

  describe('GET /files/data', () => {
    it('should get all files', (done) => {
      chai.request(app)
        .get('/api/v1/files/data')
        .end((err, res) => {
          if (!err) {
            res.should.have.status(200)
            res.body.should.be.a('array')
          }
          done()
        })
    })
  })

  describe('GET /files/list', () => {
    it('should get all files from origin API', (done) => {
      chai.request(app)
        .get('/api/v1/files/list')
        .end((err, res) => {
          if (!err) {
            res.should.have.status(200)
            res.body.should.be.a('array')
          }
          done()
        })
    })
  })
})
