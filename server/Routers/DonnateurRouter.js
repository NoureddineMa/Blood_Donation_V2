const express = require('express')
const app = express()
const verifyToken = require('../Middlewares/verifyToken')
// const verifyRole = require('../Middlewares/DonnateurMiddelware')


const {
    CreateRequestDonnateur,
    DeleteRequestDonnateur,
    GetAllDonnateurs,
    GetAllDonnateursNotAccepted,
    UpdateStatusDonnateur,
    GetDonnateursAccepte
} = require('../Controllers/DonnateurController')



app.delete('/DDonnateur/:id',DeleteRequestDonnateur)
app.post('/Donnateur',verifyToken,CreateRequestDonnateur)
app.get('/AllDonnateurs', GetAllDonnateurs)
app.get('/AllDonnateurs/noaccepted',GetAllDonnateursNotAccepted)
app.put('/AllDonnateurs/accept/:id', UpdateStatusDonnateur)
app.get('/AllDonnateurs/Accepted',GetDonnateursAccepte)

module.exports = app;