const Customer = require('../src/models/customer.model');
const Invoice = require('../src/models/invoice.model');

module.exports.customersDatabaseClear = () => {
    return new Promise((resolve, reject) => {
        Customer.deleteMany({}, (err) => {
            if (err) reject(err)
            resolve()
        })
    })
}

module.exports.invoicesDatabaseClear = () => {
    return new Promise((resolve, reject) => {
        Invoice.deleteMany({}, (err) => {
            if (err) reject(err)
            resolve()
        })
    })
}