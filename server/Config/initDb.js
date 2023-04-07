const UserModel = require('../Models/UserModel')
const RoleModel = require('../Models/RoleModel')
const connectDB = require('./dbConfig')
const bcrypt = require("bcryptjs")
const roles = process.env.ROLES?.split(',')
const defaultUser  = {
    First_Name : process.env.DEFAULT_USER_FIRST_NAME,
    Second_Name: process.env.DEFAULT_USER_LAST_NAME,
    Email: process.env.DEFAULT_USER_EMAIL,
    Password: process.env.DEFAULT_USER_PASSWORD,
    Phone_Number: process.env.DEFAULT_PHONE_NUMBER,
    Verified: true,
    role: process.env.DEFAULT_USER_ROLE
};

async function initDb(){
    await connectDB();
    await createDefaultRoles();
    await createDefaultAdmin();
}

// Create Default Roles
 function createDefaultRoles(){
    RoleModel.countDocuments({}, async (err, count) => {
        if(err){
            console.log(err);
            process.exit(1);
        }
        if(count === 0){
            roles.forEach(async (role) => {
                const newRole = new RoleModel({ role });
                await newRole.save();
            })
        }
    })
}

// Create Default Admin
 function createDefaultAdmin(){
    UserModel.findOne({Email : defaultUser.Email}, async (err, admin) => {
        if(err){
            console.log(err);
            process.exit(1);
        }
        if(!admin){
           const salt = bcrypt.genSaltSync(10);
           defaultUser.Password = await bcrypt.hash(defaultUser.Password, salt)
           const newUser = new UserModel(defaultUser);
           const userRole = await RoleModel.findOne({
            role: defaultUser.role
        })
        newUser._roles = [userRole._id];
        await newUser.save();
        }
    })
}




module.exports = initDb;
