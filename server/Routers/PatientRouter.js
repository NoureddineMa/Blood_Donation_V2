const express = require('express')
const app = express()
const verifyToken = require('../Middlewares/verifyToken')
const verifyRole = require('../Middlewares/PatientMiddelware')


const {
    createRequestPatient,
    GetAllPatients,
    DeletePatient
} = require('../Controllers/PatientController')


app.post('/Patient',verifyToken,verifyRole,createRequestPatient)
app.get('/AllPatients',verifyToken,GetAllPatients)
app.delete('/DPatient/:id',DeletePatient)


module.exports = app;