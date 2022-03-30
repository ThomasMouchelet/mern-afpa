const Customer = require('../models/customer.model');

const CustomerController = {
    create: async (req, res) => {
        try {
            const customer = new Customer(req.body)
            await customer.save();
            res.send(customer)
        } catch (error) {
            res.send(400, error)
        }
    },
    findAll: async (req, res) => {
        try {
            const customersList = await Customer.find()
            res.send(customersList)
        } catch (error) {
            res.send(400, error)
        }
    },
    findOne: async (req, res) => {
        try {
            const customer = await Customer.findById(req.params.id)
            res.send(customer)
        } catch (error) {
            res.send(400, error)
        }
    },
    delete: async (req, res) => {
        try {
            await Customer.deleteOne({ "_id": req.params.id })
            res.sendStatus(200)
        } catch (error) {
            res.send(400, error)
        }
    }
}

module.exports = CustomerController;