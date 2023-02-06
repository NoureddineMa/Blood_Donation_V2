const asyncHandler = require('express-async-handler')
const Admin = require('../Models/AdminModel')

const AdminRegister = asyncHandler((req,res) => {
    res.send('AdminRegister')
})

const AdminLogin = asyncHandler((req,res) => {
    res.send('AdminLogin')
})