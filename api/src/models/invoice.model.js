const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    }
})

module.exports = mongoose.model('Invoice', invoiceSchema)