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


// @desc DELETE SINGLE DONNATEUR  
// @ROUTE DELETE /DDonnateur/:id
// @Acces Private

const DeleteRequestDonnateur = asyncHandler(async(req,res) => {
        const _id = req.params.id;
        const checkDonnateurAndDelete = await Donnateur.findOneAndDelete({_id});
        checkDonnateurAndDelete ? res.status(200).json({message: "Donnateur Deleted Successfully"})
        : res.status(400).json({message: "Error Try again.. ! thank you"})
})

// @desc GET ALL DONNATEURS 
// @ROUTE DELETE /AllDonnateurs
// @Acces Private

const GetAllDonnateurs = asyncHandler(async (req,res) => {
    const getAllDonnateursIfExist = await Donnateur.find({});
    getAllDonnateursIfExist ? res.status(200).json(getAllDonnateursIfExist)
    : res.status(200).json({message: "No Donnateur Data founded !"})
})

module.exports = { CreateRequestDonnateur,
                    DeleteRequestDonnateur,
                    GetAllDonnateurs
                 }