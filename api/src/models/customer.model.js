const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    companyName: {
        type: String,
    },
    invoices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Invoice"
        }
    ]
})

module.exports = mongoose.model('Customer', customerSchema)