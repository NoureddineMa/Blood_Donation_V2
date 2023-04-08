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

    RequestDonnateur ? res.status(200).json({message: "Request Sent Successfully , Admin should Accept it  !"}) 
    : res.status(400).json({message: "ERROR , Please try Again !!"})
})




// @desc DELETE SINGLE DONNATEUR  
// @ROUTE DELETE /DDonnateur/:id
// @Acces Private
const DeleteRequestDonnateur = asyncHandler(async(req,res) => {
        const {id} = req.params
        const checkDonnateurAndDelete = await Donnateur.findOneAndDelete({id});
        checkDonnateurAndDelete ? res.status(200).json({message: "Donnateur Deleted Successfully"})
        : res.status(400).json({message: "Error Try again.. ! thank you"})
})



// @desc GET ALL DONNATEURS 
// @ROUTE GET /AllDonnateurs
// @Acces Private
const GetAllDonnateurs = asyncHandler(async (req,res) => {
    const getAllDonnateursIfExist = await Donnateur.find({});
    getAllDonnateursIfExist ? res.status(200).json(getAllDonnateursIfExist)
    : res.status(200).json({message: "No Donnateur Data founded !"})
})




// @desc GET ALL DONNATEURS WITH STATUS "NO ACCEPTED"
// @ROUTE DELETE /AllDonnateurs/noAccepted
// @Acces Private
const GetAllDonnateursNotAccepted = asyncHandler(async(req,res) => {
    const getNotAcceptedDonnations = await Donnateur.find({ Status: 'NOT ACCEPTED'})
    getNotAcceptedDonnations ? res.status(200).json(getNotAcceptedDonnations) : res.status(200).json({message: "0 Requests in this moment"})
})


// @desc GET ALL DONNATEURS WITH STATUS "ACCEPTED"
// @Route GET /AllDonnateurs/Accepted
// @Acces Private 
const GetDonnateursAccepte = asyncHandler(async(req,res) => {
    const getAcceptedDonnations = await Donnateur.find({ Status : "ACCEPTED"})
    getAcceptedDonnations ? res.status(200).json(getAcceptedDonnations) : res.status(200).json({message: "0 Requests in this moment"})
})


// @desc UPDATE STATUS DONNATEURS FROM NOT ACCEPTED TO ACCEPTED :
// @ROUTE PUT /AllDonnateurs/accept
// @Acces private :
const UpdateStatusDonnateur = asyncHandler(async(req,res) => {
    const { id } = req.params
    const updateStatus = await Donnateur.findByIdAndUpdate(id,
        { Status : "Accepted"},
        { new    : true })
    updateStatus ? res.status(200).json({message: "Status Updated Successfully !"}) : res.status(400).json({message: "An Error Occured , try again"})
})

module.exports = { CreateRequestDonnateur,
                    DeleteRequestDonnateur,
                    GetAllDonnateurs,
                    GetAllDonnateursNotAccepted,
                    UpdateStatusDonnateur,
                    GetDonnateursAccepte
                 }