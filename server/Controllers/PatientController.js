const asyncHandler = require('express-async-handler')
const Patient = require('../Models/PatientRequesModel');


//@Desc POST SINGLE REQUEST
// @Route POST /Patient
// @Acces Private 
const createRequestPatient = asyncHandler(async(req,res) => {
    const {
        First_Name,Second_Name,Email,Adresse,City,
        Phone_Number,NatureDeSang,DateDeNaissance} = req.body;

        if(!First_Name || !Second_Name || !Email || !Adresse || !City || !Phone_Number ||
            !NatureDeSang || !DateDeNaissance){
                 res.status(400)
                 .json({message: "Please fill all fields !!"})
            }

      // Create Request :
    const RequestPatient = await Patient.create({
        First_Name,Second_Name,Email,Adresse,City,Phone_Number,NatureDeSang,DateDeNaissance
    })

    RequestPatient ? res.status(200).json({message: "Request Sent Successfully ! thank you"}) 
    : res.status(400).json({message: "ERROR , Please try Again !!"})   
})


// @Desc GET ALL PATIENTS
// @Route GET /AllPatients
// Acces Private 
const GetAllPatients = asyncHandler(async(req,res) => {
    const getAllPatientIfExist = await Patient.find({});
    getAllPatientIfExist ? res.status(200).json(getAllPatientIfExist) : res.status(400)
    .json({message: "No Patient Data Founded"})
})


// @Desc DELETE SINGLE PATIENT
// @Route DELETE /DPatient/:id
// @Acces Private
const DeletePatient = asyncHandler(async(req,res) => {
    const { id } = req.params
    console.log(id);
    const checkPatientAndDelete = await Patient.findOneAndDelete({id})
    checkPatientAndDelete ? res.status(200).json({message: "Patient Deleted Successfully"})
    : res.status(400).json({message: "Error try again ..! thank you"})
})


module.exports = {
    createRequestPatient,
    GetAllPatients,
    DeletePatient,
}