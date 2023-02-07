const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/UserModel')
const Roles = require('../Models/RoleModel')
const nodemailer = require('nodemailer')

// *** *** *** method :post *** *** ***
// @Route :api/auth/Register
// *** acces : public ***

const Register = asyncHandler(async (req,res) => {
    const {First_Name, Second_Name , Email , Password , _roles} = req.body;

    if(!First_Name || !Second_Name || !Email || !Password || !_roles){
            res.status(400)
            .json({message: "please fill all fields"})
    }
    // check if the User Alreasy Exist 
    const userExist = await User.findOne({Email})
    if(userExist) {
        res.status(400)
        .json({message: "User Already Exist "})
    }

    // hash Password : 
    const salt = await bcrypt.genSalt(10)
    const HashedPassword = await bcrypt.hash(Password, salt)
    // find Roles By {id}
    const RoleID = await Roles.findOne({_roles: req.body._roles})
    const RoleName = RoleID._id
    // Create a User : 
    const user = await User.create({
        First_Name,
        Second_Name,
        Email,
        Password: HashedPassword,
        _roles: RoleName
    })
    if(user){
        res.status(200)
        .json({message: "User Created Succesfully But First You need to Verify Your Email !"})
    }
})


module.exports = Register;