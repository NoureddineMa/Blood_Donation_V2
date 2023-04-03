const mongoose = require('mongoose')

const BlogsModel = mongoose.Schema({
    Image : {
        data: Buffer,
        contentType: String
    },
    Title: {
        type: String
    },
    Date: {
        type: String
    },
    Content : {
        type: String
    }
}) 

module.exports = mongoose.model('Blog', BlogsModel)