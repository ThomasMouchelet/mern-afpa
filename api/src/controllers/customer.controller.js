const Customer = require('../models/customer.model');

const CustomerController = {
    create: async (req, res) => {
        console.log(req.body)
        const customer = new Customer(req.body)
        await customer.save();
        res.send(customer)
    }
}

module.exports = CustomerController;