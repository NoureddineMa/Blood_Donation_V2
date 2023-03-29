const express = require('express')
const app = express()


const {
    CreateRequestDonnateur,
    DeleteRequestDonnateur
} = require('../Controllers/DonnateurController')

app.post('/Donnateur', CreateRequestDonnateur)


module.exports = app;