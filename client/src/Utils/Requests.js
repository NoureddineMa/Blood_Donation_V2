import Api from './Api'

// LOGIN FUNCTION
export async function login(user){
    const res = await Api.post(`/auth/login`,user);
    return res.data
}
// REGISTER FUNCTION
export async function register(user){
    const res = await Api.post(`/auth/register`,user);
    return res.data
}
// FORGETPASSWORD FUNCTION
export async function ForegetPassword(user){
    const res = await Api.post(`/auth/forgetpassword`,user)
    return res.data
}
// RESETPASSWORD FUNCTION
export async function ResetPwd(token,newPassword){
    const res = await Api.post(`/auth/resetpassword/${token}`,{password: newPassword})
    return res.data
}
// VERIFY ACCOUNT FUNCTION
export async function VerifyAcc(token){
    const res = await Api.get(`/auth/verifyaccount/${token}`)
    return res.data
}
// CHANGE PASSWORD FUNCTION 
export async function ChangePwd(id,oldPassword,newPassword){
    const res = await Api.post(`/auth/changepassword/${id}`,oldPassword, {password: newPassword})
    return res.data
}
// GET ALL PATIENTS:
export async function GetAllPatients(token){
    const res = await Api.get('/AllPatients' , {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}
// POST FORM CONTACT
export async function PostForm(Msg){
    const res = await Api.post('/message',Msg)
    return res.data
}
// POST REQUEST AS DONNATEUR 
export async function PostReq(Data,token){
    const res = await Api.post('/Donnateur',Data , {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}
// Gey All Donnateur : 
export async function GetAllDonnateurs(token){
    const res = await Api.get('/AllDonnateurs', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}
// Get All Donnateurs ACCEPTED : 
export async function GetAllDonnateursAccepted(token){
    const res = await Api.get('/AllDonnateurs/Accepted' , {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}
// POST REQ AS PATIENT : 
export async function PostReqPatient(Data,token){
    const res = await Api.post('/Patient', Data , {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}
// DELETE DONNATEUR 
export async function DeleteDonnateur(id,token){
    const res = await Api.delete(`/DDonnateur/${id}`,  {
        headers :{
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}
// ACCEPT DONNNATEUR
export async function AcceptDonnateur(id,token){
    const res = await Api.put(`/AllDonnateurs/accept/${id}`, {
        headers :{
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}

// GET ALL PATIENTS :
export async function AllPatients(token){
    const res = await Api.get('/AllPatients' , {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}
// Delete Patient :
export async function DeletePatient(id,token){
    const res = await Api.delete(`/DPatient/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
