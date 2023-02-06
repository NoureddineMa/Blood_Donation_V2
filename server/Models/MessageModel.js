const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    Nom : {
        type: String,
    },
    Prenom : {
        type: String
    },
    Email : {
        type: String,
        unique: true,
    },
    Contexte : {
        type: String
    },
    Message: {
        type: String
    }

})

module.exports = mongoose.model('Message', messageSchema)