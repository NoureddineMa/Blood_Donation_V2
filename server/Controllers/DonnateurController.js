const asyncHandler = require('express-async-handler')
const Donnateur = require('../Models/DonnateurModel')

const DonnateurLogin = asyncHandler((req,res) => {
    res.send('DonnateurLogin')
})
