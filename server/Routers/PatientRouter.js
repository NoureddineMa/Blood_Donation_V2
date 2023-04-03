const express = require('express')
const app = express()
const verifyToken = require('../Middlewares/verifyToken')


const {
    createRequestPatient,
    GetAllPatients,
    DeletePatient
} = require('../Controllers/PatientController')


app.post('')
app.get('')