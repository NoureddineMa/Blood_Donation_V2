import CustomButton from "../components/CustomButton"
import CustomInput from "../components/CustomInput"
import CustomLabel from "../components/CustomLabel"
import { useState } from "react"
import { ForegetPassword } from "../Utils/Requests"
import Alert from "../Utils/Alert"
import Spinner from "../Utils/Spinner"


function ForgetPassword() {

    const [Email, setEmail] = useState()
    const [msgSucces, setMsgSucces] = useState()
    const [succes, setSucces] = useState(false)
    const [msgError, setMsgError] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const handleEmail = (e) => {
       return setEmail(e.target.value)
    }

    const handleForgetPassword = async (e) => {
        e.preventDefault()
        const user = {
            Email
        }
        try {
            setLoading(true)
            const data = await ForegetPassword(user)
            setError(false)
            setSucces(true)
            setMsgSucces(data.message)
            setLoading(false)
        } catch (error) {
            setSucces(false)
            setError(true)
            setMsgError(error?.response?.data?.message)
            setLoading(false)
        }
    }

    return (
        <>
                            <form className="space-y-4 md:space-y-6">
                            {loading && <Spinner />}   
                            {succes && <Alert message={msgSucces}  className="flex items-center bg-green-400 text-white text-sm font-bold px-4 py-3"/>}
                            {error && <Alert message={msgError}  className="flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3" />}
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Forget Password
                            </h1>
                                <div>
                                    <CustomLabel for="Email" label="Your Email" />
                                    <CustomInput type="Email" name="email" placeholder="enter your email to reset your password" onChange={handleEmail}/>
                                </div>
                                <CustomButton type="submit" content="Send" onClick={handleForgetPassword} />
                            </form>
        </>
    )
}
export default ForgetPassword