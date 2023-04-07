const asyncHandler = require('express-async-handler')
const User = require('../Models/UserModel')
const Roles = require('../Models/RoleModel')

const AdminMiddelware = asyncHandler(async (req, res, next) => {
    console.log(req.user._id);
    const donnateur = await User.findById({ _id: req.user._id })
    const roleID = donnateur?._roles
    const SchemaRole = await Roles.findById({ _id: roleID })
    const nameRole = SchemaRole.role
    if (nameRole !== 'Admin') {
        return res.status(400)
            .json({ message: "ACCES DENIED !!" })
    }
    next()
})

module.exports = AdminMiddelware