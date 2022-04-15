require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports.generateToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}