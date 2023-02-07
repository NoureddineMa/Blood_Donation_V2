const express = require('express')
const { model } = require('mongoose')
const router = express.Router()

const Register = require('../Controllers/AuthController')


router.post('/register', Register)

module.exports = router