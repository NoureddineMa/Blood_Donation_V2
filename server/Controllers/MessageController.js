const asyncHandler = require('express-async-handler')
const Message = require('../Models/MessageModel')

const AddMessage = asyncHandler((req,res) => {
    res.send('AddMessage')
})

