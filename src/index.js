const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world.' })
})

app.get('/users', (req, res) => {
  res.json({ data: [{ id: 1, name: 'test' }] })
})

const port = process.env.PORT || '8080'
app.listen(port, () => {
  console.log(`🚀 Server running\n> http://localhost:${port}`)
})

module.exports.handler = serverless(app)
