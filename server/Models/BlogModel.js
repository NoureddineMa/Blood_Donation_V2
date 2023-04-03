const mongoose = require('mongoose')

const BlogsModel = mongoose.Schema({
    Image : {
        type: String
    },
    Title: {
        type: String
    },
    Date: {
        type: Date
    },
    Content : {
        type: Date
    }
}) 

module.exports = mongoose.model('Blog', BlogsModel)