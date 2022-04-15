const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/token');

const AuthController = {
    signup: async (req, res) => {
        const { email, password } = req.body

        bcrypt.hash(password, 10, async function (err, hash) {
            const newUser = {
                email,
                password: hash
            }

            try {
                await new User(newUser).save()
                const accessToken = generateToken(newUser)
                res.status(200).send({ accessToken })
            } catch (error) {
                res.send(500).send("Error server")
            }

        });
    },
    signin: async (req, res) => {
        const { email, password } = req.body

        try {
            const user = await User.findOne({ email })

            if (user) {
                const compare = await bcrypt.compare(password, user.password)
                if (compare) {
                    const accessToken = generateToken(user)
                    res.status(200).send({ accessToken })
                } else {
                    res.send(401).send("Wrong password")
                }
            } else {
                res.send(401).send("Wrong email or password")
            }
        } catch (error) {
            res.send(500).send("Error server")
        }
    }
}

module.exports = AuthController