const asyncHandler = require('express-async-handler')
const Donnateur = require('../Models/DonnationRequestModel')




// @desc POST SIGNLE REQUEST 
// @ROUTE POST /Donnateur
// @Acces Private

const CreateRequestDonnateur = asyncHandler(async(req,res) => {
    const {
        First_Name,Second_Name,Email,Adresse,City,
        Phone_Number,NatureDeSang,DateDeNaissance} = req.body;

    if(!First_Name || !Second_Name || !Email || !Adresse || !City || !Phone_Number ||
       !NatureDeSang || !DateDeNaissance){
            res.status(400)
            .json({message: "Please fill all fields !!"})
       }

    // Create Request :
    const RequestDonnateur = await Donnateur.create({
        First_Name,Second_Name,Email,Adresse,City,Phone_Number,NatureDeSang,DateDeNaissance
    })

    RequestDonnateur ? res.status(200).json({message: "Request Sent Successfully !"}) 
    : res.status(400).json({message: "ERROR , Please try Again !!"})
})


const DeleteRequestDonnateur = asyncHandler(async(req,res) => {

})

module.exports = { CreateRequestDonnateur , DeleteRequestDonnateur }