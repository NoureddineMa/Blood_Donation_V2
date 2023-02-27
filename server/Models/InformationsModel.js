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
    NatureBlood: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Information', infoSchema)