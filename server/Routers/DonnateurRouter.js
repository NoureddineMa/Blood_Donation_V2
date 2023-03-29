const express = require('express')
const app = express()
const verifyToken = require('../Middlewares/verifyToken')


const {
    CreateRequestDonnateur,
    DeleteRequestDonnateur,
    GetAllDonnateurs
} = require('../Controllers/DonnateurController')



app.delete('/DDonnateur/:id',DeleteRequestDonnateur)
app.post('/Donnateur',verifyToken,CreateRequestDonnateur)
app.get('/AllDonnateurs', GetAllDonnateurs)

module.exports = app;