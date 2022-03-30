const express = require('express')
const app = express()
const connexion = require('./config/database')
const CustomerController = require('./src/controllers/customer.controller')

connexion()
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello')
})

app.post('/api/customers', function (req, res) {
  CustomerController.create(req, res)
})

app.listen(3000)