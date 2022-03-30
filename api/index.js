const express = require('express')
const app = express()
const connexion = require('./config/database')
const customerRouter = require('./src/routes/customers.route')
const invoiceRouter = require('./src/routes/invoices.route')

connexion()
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello')
})

app.use('/api', customerRouter)
app.use('/api', invoiceRouter)

app.listen(3000)