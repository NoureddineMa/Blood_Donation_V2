const asyncHandler = require('express-async-handler')
const Publication = require('../Models/PublicationModel')

const AddPublication = asyncHandler((req,res) => {
    res.send('PublicationAdd')
})

const RemovePublication = asyncHandler((req,res) => {
    res.send('PublicationDeleted')
})

