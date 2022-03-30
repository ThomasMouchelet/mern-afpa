const express = require('express')
const CustomerController = require('../controllers/customer.controller')
const router = express.Router()

router.post('/customers', CustomerController.create)
router.get('/customers', CustomerController.findAll)
router.get('/customers/:id', CustomerController.findOne)
router.get('/customers/:id/invoices', CustomerController.findAllInvoices)
router.delete('/customers/:id', CustomerController.delete)

module.exports = router