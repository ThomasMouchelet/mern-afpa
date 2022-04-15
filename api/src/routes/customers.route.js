const express = require('express')
const CustomerController = require('../controllers/customer.controller')
const { authenticatedToken } = require('../middlewares/authenticatesToken')
const router = express.Router()

router.post('/customers', authenticatedToken, CustomerController.create)
router.get('/customers', authenticatedToken, CustomerController.findAll)
router.get('/customers/:id', authenticatedToken, CustomerController.findOne)
router.get('/customers/:id/invoices', authenticatedToken, CustomerController.findAllInvoices)
router.delete('/customers/:id', authenticatedToken, CustomerController.delete)

module.exports = router