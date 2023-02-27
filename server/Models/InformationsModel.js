const mongoose = require('mongoose')

const infoSchema = mongoose.Schema({
    Adresse: {
        type: String,
        required: true
    },
    Ville: {
        type: String,
        required: true,
    },
    Sexe: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    NatureBlood: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Information', infoSchema)