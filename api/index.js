const express = require('express')
const app = express()
const CustomerController = require('./src/controllers/customer.controller')

app.post('/api/cutomers', function (req, res) {
  CustomerController.create(req, res)
})

app.listen(3000)