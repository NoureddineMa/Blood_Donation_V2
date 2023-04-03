// const asyncHandler = require('express-async-handler')
// const Donnateur = require('../Models/DonnationRequestModel')
// const Roles = require('../Models/RoleModel')

// const DonnateurMiddleware = asyncHandler(async(req,res,next) => {
//     const donnateur = await Donnateur.findById({_id: req.user._id})
//     const roleID = donnateur?._roles
//     const SchemaRole = await Roles.findById({_id: roleID})
//     console.log(SchemaRole);
//     const nameRole = SchemaRole.role
//     console.log(nameRole);
//     if(nameRole !== 'Donnateur'){
//         res.status(400)
//         .json({message: "ACCES DENIED !!"})
//     }
//     next()
// })

// module.exports = DonnateurMiddleware