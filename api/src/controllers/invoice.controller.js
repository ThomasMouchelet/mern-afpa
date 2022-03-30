const Invoice = require('../models/invoice.model');
const Customer = require('../models/customer.model');

const InvoiceController = {
    create: async (req, res) => {
        try {
            const customerId = req.body.customer._id
            const customer = await Customer.findById(customerId)
            const invoice = {
                amount: req.body.amount,
                customer
            }
            const data = await Invoice.create(invoice)
            await data.save();
            customer.invoices.push(data)
            await customer.save()

            res.send(data)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    findAll: async (req, res) => {
        try {
            const invoicesList = await Invoice.find()
            res.send(invoicesList)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    findOne: async (req, res) => {
        try {
            const invoice = await Invoice.findById(req.params.id)
            res.send(invoice)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            await Invoice.deleteOne({ "_id": req.params.id })
            res.sendStatus(200)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}

module.exports = InvoiceController;