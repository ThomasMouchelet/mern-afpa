const express = require('express')
const AuthController = require('../controllers/auth.controller')
const router = express.Router()

router.post('/auth/signup', AuthController.signup)
router.post('/auth/signin', AuthController.signin)

module.exports = router