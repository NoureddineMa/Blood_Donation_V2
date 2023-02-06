const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    First_Name : {
        type: String,
    },
    Second_Name: {
        type: String,
    },
    Email : {
        type: String,
        unique: true
    },
    Password : {
        type: String
    }
})

module.exports = mongoose.model('Admin', adminSchema)