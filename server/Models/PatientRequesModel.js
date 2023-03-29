const mongoose = require('mongoose')

const PatientRequestModel = mongoose.Schema({
   First_Name: {
        type: String
    },
    Second_Name: {
        type: String
    },
    Email: {
        type:String,
    },
    Adresse: {
        type: String,
    },
    City : {
        type: String,
    },
    Phone_Number: {
        type: String
    },
    NatureDeSang: {
        type : String
    },
    DateDeNaissance: {
        type: Date
    }
})

module.exports = mongoose.model('Patient', PatientRequestModel)

