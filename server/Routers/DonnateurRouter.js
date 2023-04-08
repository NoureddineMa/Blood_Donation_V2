const express = require('express')
const app = express()
const verifyToken = require('../Middlewares/verifyToken')
const verifyRole = require('../Middlewares/DonnateurMiddelware')


const {
    CreateRequestDonnateur,
    DeleteRequestDonnateur,
    GetAllDonnateurs,
    GetAllDonnateursNotAccepted,
    UpdateStatusDonnateur,
    GetDonnateursAccepte
} = require('../Controllers/DonnateurController')



app.delete('/DDonnateur/:id',verifyToken,verifyRole,DeleteRequestDonnateur)
app.post('/Donnateur',verifyToken,verifyRole,CreateRequestDonnateur)
app.get('/AllDonnateurs',verifyToken,verifyRole,GetAllDonnateurs)
app.get('/AllDonnateurs/noaccepted',verifyToken,verifyRole,GetAllDonnateursNotAccepted)
app.put('/AllDonnateurs/accept/:id',verifyToken,verifyRole,UpdateStatusDonnateur)
app.get('/AllDonnateurs/Accepted',verifyToken,verifyRole,GetDonnateursAccepte)

module.exports = app;