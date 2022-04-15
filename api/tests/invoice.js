const { creatUser } = require("./customer")

module.exports.createInvoice = async (app, request) => {
    const responseCustomer = await creatUser(app, request)
    const customerId = responseCustomer.body._id

    const response = await request(app)
        .post('/api/invoices')
        .send({
            amount: 98989,
            customer: {
                _id: customerId
            }
        })

    return response
}