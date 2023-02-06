const asyncHandler = require('express-async-handler')
const Patient = require('../Models/PatientModel')

const PatientLogin = asyncHandler((req,res) => {
    res.send('PatientLogin')
})

const PatientRegister = asyncHandler((req,res) => {
    res.send('PatientRegister')
})

