import React, { useState, useContext } from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomLabel from '../../components/CustomLabel'
import { ChangePwd } from '../../Utils/Requests'
import UserContext from '../../Context/UserContext'
import Alert from "../../Utils/Alert"

function ChangePassword() {

    const { user } = useContext(UserContext)
    const id = user._id

    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setnewPassword] = useState()
    const [succes , setSucces] = useState(false)
    const [msgSucces, setMsgSucces] = useState()
    const [error, setError] = useState(false)
    const [msgError, setMsgError] = useState()


    const handleoldInput = (e) => {
        return setOldPassword(e.target.value)
    }
    const handleNewInput = (e) => {
        return setnewPassword(e.target.value)
    }

    const handleChange = async (e) => {
        const pwds = {
            oldPassword,
            newPassword
        }
        try {
            e.preventDefault();
            const data = await ChangePwd(id, pwds)
            setError(false)
            setSucces(true)
            setMsgSucces(data.message)
        } catch (error) {
            setSucces(false)
            setError(true)
            setMsgError(error?.response?.data?.message)
        }
    }

    return (
        <>
            <section className=" py-1">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-red-600 Gray-700 text-xl font-bold">
                                    Change Password
                                </h6>
                            </div>
                            {succes && <Alert message={msgSucces} className="flex items-center bg-green-400 text-white text-sm font-bold px-4 py-3 my-5"/>}
                            {error && <Alert message={msgError} className="flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3 my-5"/>}
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <div className="flex flex-wrap">

                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <CustomLabel type="text" label="Last Password" />
                                            <CustomInput type="password" onChange={handleoldInput} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <CustomLabel type="text" label="New Password" />
                                            <CustomInput type="password" onChange={handleNewInput} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                        <CustomButton type="submit" onClick={handleChange} content="Change Password" className="mt-7" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChangePassword