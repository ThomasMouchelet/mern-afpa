const express = require('express')
const InvoiceController = require('../controllers/invoice.controller')
const router = express.Router()

router.post('/invoices', InvoiceController.create)
router.get('/invoices', InvoiceController.findAll)
router.get('/invoices/:id', InvoiceController.findOne)
router.delete('/invoices/:id', InvoiceController.delete)

module.exports = router