const express = require('express')
const app = express()
const verifyToken = require('../Middlewares/verifyToken')


const {
    CreateRequestDonnateur,
    DeleteRequestDonnateur
} = require('../Controllers/DonnateurController')

app.post('/Donnateur',verifyToken,CreateRequestDonnateur)


module.exports = app;