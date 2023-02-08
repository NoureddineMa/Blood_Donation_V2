const express = require('express')
const router = express.Router()

const {
    Register,
    Login,
    EmailVerification,
    ForegetPassword,
    ResetPassword
    } = require('../Controllers/AuthController')


router.post('/register', Register)
router.post('/login' , Login)
router.get('/register/verify/:token' , EmailVerification)
router.post('/forgetpassword' , ForegetPassword)
router.post('/resetpassword/:token', ResetPassword)

module.exports = router;