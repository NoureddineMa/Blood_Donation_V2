const asyncHandler = require('express-async-handler')
const Donnateur = require('../Models/DonnationRequestModel')

const DonnateurMiddleware = asyncHandler(async(req,res,next) => {
    const donnateur = await Donnateur.findById({_id: req.user._id})
    const roleName = donnateur.roleName
    if(roleName !== 'Donnateur'){
        res.status(400)
        .json({message: "ACCES DENIED !!"})
    }
    next()
})

module.exports = DonnateurMiddleware