const express = require('express')
const router = express.Router()

const {Register , Login , EmailVerification} = require('../Controllers/AuthController')


router.post('/register', Register)
router.post('/login' , Login)
router.get('/register/verify/:token' , EmailVerification)

module.exports = router