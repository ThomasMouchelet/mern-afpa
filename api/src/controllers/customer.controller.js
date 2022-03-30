const Customer = require('../models/customer.model');

const CustomerController = {
    create: async (req, res) => {
        const customer = new Customer(req.body);
        await customer.save();
        res.send('success')
    }
}

module.exports = CustomerController;