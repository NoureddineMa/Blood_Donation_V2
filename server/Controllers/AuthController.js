const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/UserModel')
const Roles = require('../Models/RoleModel')
const nodemailer = require('nodemailer')
const expressAsyncHandler = require('express-async-handler')

// *** *** *** method :post *** *** ***
// @Route :api/auth/register
// *** acces : public ***

const Register = asyncHandler(async (req, res) => {
    const { First_Name, Second_Name, Email, Password,Phone_Number, _roles } = req.body;

    if (!First_Name || !Second_Name || !Email || !Password || !Phone_Number || !_roles) {
        res.status(400)
            .json({ message: "please fill all fields" })
    }
    // check if the User Alreasy Exist 
    const userExist = await User.findOne({ Email })
    if (userExist) {
        res.status(400)
            .json({ message: "User Already Exist " })
    }

    // check if the Phone number of user is already exist : 
    const PhoneNumberExist = await User.findOne({Phone_Number})
    if(PhoneNumberExist){
        res.status(400)
        res.json({message: "Please try another Phone Number"})
    }

    // hash Password : 
    const salt = await bcrypt.genSalt(10)
    const HashedPassword = await bcrypt.hash(Password, salt)
    // find Roles By {id}
    const RoleID = await Roles.findOne({ _roles: req.body._roles })
    const RoleName = RoleID._id
    // Create a User : 
    const user = await User.create({
        First_Name,
        Second_Name,
        Email,
        Password: HashedPassword,
        Phone_Number,
        _roles: RoleName
    })
    if (user) {
        res.status(200)
            .json({ message: "User Created Succesfully But First You need to Verify Your Email !" })
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
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' })
        // Create BodyMail
        const mailContent = {
            from: "Verify Your Email" + process.env.EMAIL,
            to: Email,
            subject: "Verify Your Email",
            html: `<h2>Hi Please Verify Your Email <a href="http://localhost:3000/register/verify/${token}"> <button>Click here</button></a></h2>`
        }
        // Send Mail:
        transporter.sendMail(mailContent, (err) => !err)
        // Other Scénario When User Cant Register
    }
    else {
        res.status(400)
            .json({ message: "Invalid User Data" })
    }
})

// *** *** *** method :post *** *** ***
// @Route :api/auth/login
// *** acces : public ***

const Login = asyncHandler(async (req, res) => {
    const { Email, Password } = req.body


    if (!Email || !Password) {
        res.status(400)
            .json({ message: "Please fill all fields" })
            return;
    }

    // Check for userEmail :
    const user = await User.findOne({ Email })
    if (user) {
        const StatusUser = user.Verified
        if (StatusUser) {
            userRole = user._roles
            const findRoleByID = await Roles.findById({ _id: userRole })
            const nameRole = findRoleByID.role
            if (user && (await bcrypt.compare(Password, user.Password))) {

                // CREATE TOKEN
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '24h'
                });
                res.status(200)
                    .json({token,user,nameRole})
            } else {
                res.status(400)
                    .json({ message: "Invalid Credentials" })
            }
        }
        else {
            res.status(400)
                .json({ message: "You need to verify Your Email to Login !" })
        }
    } else {
        res.status(400)
            .json({ message: "User Not Found !" })
    }
})


// *** *** *** method :post *** *** ***
// @Route /register/verify/:token
// *** acces : private ***

const EmailVerification = expressAsyncHandler(async (req, res) => {
    // retrieve token from params 
    const token = req.params.token
    // Verify token :
    const userData = jwt.verify(token, process.env.JWT_SECRET)
    if (!userData) return res.status(500)
        .json({
            succes: false,
            message: 'NO TOKEN'
        })
    // GET ID 
    const userID = userData._id
    User.updateOne({ _id: userID }, { $set: { Verified: true } })
        .then(() => {
            res.status(200)
                .json({ message: "Email Verified Succesfully !" })
        }).catch((err) => {
            res.status(400)
                .json({ message: "Something Went Wrong" + err })
        })
})


// *** *** *** method :post *** *** ***
// @Route :api/auth/forgetpassword
// *** acces : public ***

const ForegetPassword = asyncHandler(async(req,res) => {
    const UserEmail = req.body.Email
    if(!UserEmail){
        res.status(400)
           .json({message: "please fill all fields"})
    }
    const RetrieveEmail = await User.findOne({Email: UserEmail})
    if(RetrieveEmail){
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
        const token = jwt.sign({_id: RetrieveEmail._id} , process.env.JWT_SECRET, {expiresIn: '10m'})
        // Create MailBody
        const mailContent = {
            from: "Reset Password" + process.env.EMAIL,
            to: UserEmail,
            subject: 'Reset Password',
            html: `<h2>To reset you password please click here <a href="http://localhost:3000/resetpassword/${token}">here</a></h2>`
        }
        // Send Email : 
        transporter.sendMail(mailContent , (err) => !err ? console.log(`Mail just send to ${UserEmail}`) : console.log(err))
        res.status(200)
        .json({message:`Mail just send to ${UserEmail}`})
    } else {
        res.status(400)
        .json({message: "Email Wrong or Not Found !!"})
    }
})

// *** *** *** method :post *** *** ***
// @Route :api/auth/resetpassword/:token
// *** acces : public ***

const ResetPassword = asyncHandler(async(req,res) => {
    // GET TOKEN FROM REQ:
    const token = req.params.token
    const userInfos = jwt.verify(token , process.env.JWT_SECRET)
    // GET ID: 
    const userID = userInfos._id
    // get PW from REQ: 
    const newPassword = req.body.password
    if(!newPassword){
        res.status(400)
        .json({message: "Password Required"})
    } else {
        // Hash Password :
        const salt = await bcrypt.genSalt(10)
        const HashedPassword = await bcrypt.hash(newPassword , salt)

        User.updateOne({_id: userID}, {$set: {Password: HashedPassword}})
        .then(() => {
            res.status(200)
            .json({message: "Password Changed Succesfully !"})
        }).catch((err) => {
            res.status(400)
            .json({message: "Something Went Wrong " + err })
        })
    }
})  


const verifyAcc = asyncHandler(async (req,res) => {
        const token = req.params.token
        const userData = jwt.verify(token, process.env.JWT_SECRET) 
        if(!userData) return res.status(400)
        .json({
            succes: false,
            message: 'No Token !'
        })
        const userId = userData._id
        User.updateOne({_id: userId}, {$set : { Verified : true}})
        .then(() => {
            res.status(200)
            .json({message: "email verified succesfully !"})
        }).catch((err) => {
            res.status(400)
            .json({message: "Something went wrong !" + err})
        })
})

module.exports = {
    Register,
    Login,
    EmailVerification,
    ForegetPassword,
    ResetPassword,
    verifyAcc
}