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
    // Create MailTransporter:
    const transporter = nodemailer.createTransport({
        service: process.env.SMTP,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PWD_EMAIL
        },
        tls: {
            rejectUnauthorized: false
        }        
    })
    const token = jwt.sign({_id:user._id }, process.env.JWT_SECRET, {expiresIn: '2h'})
    // Create BodyMail
    const mailContent = {
        from : "Verify Your Email" + process.env.EMAIL,
        to: Email,
        subject: "Verify Your Email",
        html: `<h2>Hi Please Verify Your Email <a href="http://localhost:4000/register/verify/${token}"> <button>Click here</button></a></h2>`
    }
    // Send Mail:
    transporter.sendMail(mailContent, (err) => !err)
     // Other Scénario When User Cant Register
    }
    else {
        res.status(400)
        .json({message: "Invalid User Data"})
    }
})


module.exports = Register;