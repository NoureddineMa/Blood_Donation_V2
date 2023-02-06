const mongoose = require('mongoose')

const publicationSchema = mongoose.Schema({
    Image : {
        data: Buffer,
        contentType: String,
    },
    Title : {
        type: String,
    },
    Description : {
        type: String
    }
})

module.exports = mongoose.model('Publication', publicationSchema)