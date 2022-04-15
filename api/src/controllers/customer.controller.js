const Customer = require('../models/customer.model');
const User = require('../models/user.model');

const CustomerController = {
    create: async (req, res) => {
        const email = req.email
        console.log(email)
        const user = await User.findOne({ email })
        const newCustomer = {
            ...req.body,
            user: user._id
        }

        try {
            const customer = new Customer(newCustomer)
            await customer.save();

            user.customers.push(customer)
            user.save()

            res.send(customer)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    findAll: async (req, res) => {
        try {
            const customersList = await Customer.find()
            res.send(customersList)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    findOne: async (req, res) => {
        try {
            const customer = await Customer.findById(req.params.id)
            res.send(customer)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            await Customer.deleteOne({ "_id": req.params.id })
            res.sendStatus(200)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    findAllInvoices: async (req, res) => {
        try {
            const invoicesList = await Customer.findById(req.params.id).populate('invoices')
            res.send(invoicesList)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}

module.exports = CustomerController;