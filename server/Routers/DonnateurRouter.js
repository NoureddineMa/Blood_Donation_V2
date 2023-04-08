const express = require('express')
const app = express()
const verifyToken = require('../Middlewares/verifyToken')
const verifyRole = require('../Middlewares/DonnateurMiddelware')
const patientRole = require('../Middlewares/PatientMiddelware')


const {
    CreateRequestDonnateur,
    DeleteRequestDonnateur,
    GetAllDonnateurs,
    GetAllDonnateursNotAccepted,
    UpdateStatusDonnateur,
    GetDonnateursAccepte
} = require('../Controllers/DonnateurController')



app.delete('/DDonnateur/:id',verifyToken,DeleteRequestDonnateur)
app.post('/Donnateur',verifyToken,CreateRequestDonnateur)
app.get('/AllDonnateurs',verifyToken,GetAllDonnateurs)
app.get('/AllDonnateurs/noaccepted',verifyToken,GetAllDonnateursNotAccepted)
app.put('/AllDonnateurs/accept/:id',verifyToken,verifyRole,UpdateStatusDonnateur)
app.get('/AllDonnateurs/Accepted',verifyToken,GetDonnateursAccepte)

module.exports = app;