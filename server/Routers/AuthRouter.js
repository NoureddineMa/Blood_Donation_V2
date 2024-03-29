const express = require('express')
const router = express.Router()
const {
    Register,
    Login,
    EmailVerification,
    ForegetPassword,
    ResetPassword,
    verifyAcc,
    changePassword
    } = require('../Controllers/AuthController')


router.post('/register', Register)
router.post('/login' , Login)
router.get('/register/verify/:token' , EmailVerification)
router.post('/forgetpassword' , ForegetPassword)
router.post('/resetpassword/:token', ResetPassword)
router.get('/verifyaccount/:token', verifyAcc)
router.post('/changepassword/:id' ,changePassword)


module.exports = router;