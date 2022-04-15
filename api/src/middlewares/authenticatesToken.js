const jwt = require("jsonwebtoken")
require('dotenv').config()

module.exports.authenticatedToken = (req, res, next) => {
    const autHeader = req.headers["authorization"]
    const token = autHeader && autHeader.split(' ')[1]

    if (!token) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
            return res.sendStatus(401)
        }

        req.email = payload.email
        next()
    })
}