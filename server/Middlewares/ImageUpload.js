const multer = require('multer')

const storage = multer.diskStorage((
   function (req,res,cb){
    cb(null, 'uploads/')
   },
    function (req,file,cb){
    cb(null , file.fieldname + '-' + Date.now())
   }
))


const upload = multer( { storage: storage })


module.exports =  upload;