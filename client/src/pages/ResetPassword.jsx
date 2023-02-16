import CustomButton from "../components/CustomButton"
import CustomInput from "../components/CustomInput"
import CustomLabel from "../components/CustomLabel"
import Alert from "../Utils/Alert"
import {ResetPwd} from "../Utils/Requests"
import { useParams , useNavigate } from "react-router-dom"
import { useState } from "react"


function ResetPassword() {

    const [newPassword , stPwd] = useState()
    const [Cpwd, setCpwd] = useState()
    const [succes, setSucces] = useState(false)
    const [msgSucces , setMsgSucces] = useState()
    const [error, setError] = useState(false)
    const [msgError, setMsgError] = useState()

    const nav = useNavigate();

    const handlePassword = (e) => {
        return stPwd(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        return setCpwd(e.target.value)
    }

    const {token} = useParams();

    const handleResetPassword = async (e) => {
        e.preventDefault()
        if(newPassword !== Cpwd){
            setSucces(false)
            setError(true)
            setMsgError('Password is not the same !')
        } else  {
            try {
                const data = await ResetPwd(token,newPassword)
                setError(false)
                setSucces(true)
                setMsgSucces(data.message)
                setTimeout(() => {
                    nav('/login')
                }, 2000);
            } catch (error) {
                setSucces(false)
                setError(true)
                setMsgError(error)
            }
        }
    }

    return (
        <>
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Enter New Password
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                {succes && <Alert className="flex items-center bg-green-400 text-white text-sm font-bold px-4 py-3" message={msgSucces} />}
                                {error &&  <Alert className="flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3" message={msgError} />}
                                <div>
                                    <CustomLabel for="Password" label="New Password" />
                                    <CustomInput type="Password" name="Password" placeholder="**********" onChange={handlePassword}  />
                                </div>
                                <div>
                                    <CustomLabel for="Password" label="Confirm Password" />
                                    <CustomInput type="Password" name="Password" placeholder="**********" onChange={handleConfirmPassword}  />
                                </div>
                                <CustomButton type="submit" content="Reset Password" onClick={handleResetPassword} />
                            </form>
        </>
    )
}

export default ResetPassword