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
        type: String,
        required: true,
    },
    Verified: {
        type: Boolean,
        default: false,
    },
    _roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
        },
    ]
})

module.exports = mongoose.model('User', adminSchema)