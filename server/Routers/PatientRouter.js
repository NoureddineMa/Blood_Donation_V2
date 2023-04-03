const express = require('express')
const app = express()
const verifyToken = require('../Middlewares/verifyToken')


const {
    createRequestPatient,
    GetAllPatients,
    DeletePatient
} = require('../Controllers/PatientController')


app.post('/Patient', createRequestPatient)
app.get('/AllPatients', GetAllPatients)
app.delete('/DPatient/:id', DeletePatient)


module.exports = app;