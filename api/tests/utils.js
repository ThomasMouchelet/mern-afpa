const Customer = require('../src/models/customer.model');
const Invoice = require('../src/models/invoice.model');
const User = require('../src/models/user.model');

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

module.exports.usersDatabaseClear = () => {
    return new Promise((resolve, reject) => {
        User.deleteMany({}, (err) => {
            if (err) reject(err)
            resolve()
        })
    })
}