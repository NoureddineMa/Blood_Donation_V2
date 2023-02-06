const mongoose = require('mongoose')

const donnateurSchema = mongoose.Schema({
    Nom : {
        type: String
    },
    Prenom : {
        type: String
    },
    Adresse: {
        type: String
    },
    Ville : {
        type: String
    },
    Email : {
        type: String,
        unique: true
    },
    Numero_Telephone: {
        type: String,
        unique: true
    },
    Nature_Sang: {
        type: String
    },
    Date_Naissance : {
        type: Date,
    },
    Status : {
        type: String,
        default: 'En Cours'
    }
})

module.exports = mongoose.model('Donnateur', donnateurSchema)