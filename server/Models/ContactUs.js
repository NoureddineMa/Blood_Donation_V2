const mongoose = require('mongoose')

const ContactUsModel = mongoose.Schema({
    First_Name : {
        type: String
    },
    Last_Name : {
        type: String
    },
    Email: {
        type: String
    },
    Contexte : {
        type: String
    },
    Message: {
        type: String
    }
})

module.exports = mongoose.model('ContactUs' , ContactUsModel)