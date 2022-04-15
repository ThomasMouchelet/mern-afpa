const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    customers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    }]
})

module.exports = mongoose.model('User', userSchema)