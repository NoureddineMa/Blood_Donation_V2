const asyncHandler = require('express-async-handler')
const Contact = require('../Models/ContactUs')


// @desc POST SIGNLE REQUEST 
// @ROUTE POST /Message
// @Acces PUBLIC 
const CreateMessage = asyncHandler(async(req,res) => {
    const { First_Name,Last_Name,Email,Contexte,Message } = req.body

    if(!First_Name || !Last_Name || !Email || !Contexte || !Message){
        res.status(400).json({message: "Please fill all fields"})
    }
    // Create Request : 
    const Requestmsg = await Contact.create({First_Name,Last_Name,Email,Contexte,Message})
    Requestmsg ? res.status(200).json({message:"Message sent Succesfully ! thank you"})
    : res.status(400).json({message:"ERROR , please try Again !!"})
})


// @desc DELETE SIGNLE REQUEST 
// @ROUTE POST /Message/:id
// @Acces PRIVATE 
const DeleteMessage = asyncHandler(async(req,res) => {
    const {id} = req.params
    const checkMsgAndDelete = await Contact.findOneAndDelete({id})
    checkMsgAndDelete ? res.status(200).json({message:"Message Deleted Successfully"})
    : res.status(400).json({message: "Error Try Again.. ! thank you"})
})



// @desc GET ALL  MESSAGES 
// @ROUTE GET /Messages
// @Acces PRIVATE 

const GetAllMessages = asyncHandler(async(req,res) => {
    const getAllMessagesIfExists = await Contact.find({});
    getAllMessagesIfExists ? res.status(200).json(getAllMessagesIfExists)
    : res.status(400).json({message: "No Messages Data founded !"})
})



module.exports = {
    CreateMessage,
    DeleteMessage,
    GetAllMessages
}
