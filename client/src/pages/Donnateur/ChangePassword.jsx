import React , {useState , useContext} from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomLabel from '../../components/CustomLabel'
import { ChangePwd } from '../../Utils/Requests'
import UserContext from '../../Context/UserContext'

function ChangePassword() {

    const { user } = useContext(UserContext)
    console.log(user);  
    const id = user._id  
    console.log(id);

    const [oldPassword , setOldPassword] = useState()
    const [newPassword, setnewPassword] = useState()
    const handleoldInput = (e) => {
       return setOldPassword(e.target.value)
    }
    const handleNewInput = (e) => {
        return setnewPassword(e.target.value)
    }
    const handleChange = async (e) => {
            e.preventDefault();
            const data = await ChangePwd(id,oldPassword,newPassword)
            console.log(data);   
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
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <div className="flex flex-wrap">
                               
                            <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                    <CustomLabel type="text" label="Last Password" />
                                    <CustomInput type="password" onChange={handleoldInput}  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                    <CustomLabel type="text" label="New Password" />
                                    <CustomInput type="password" onChange={handleNewInput}  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                <CustomButton type="submit" onClick={handleChange} content="Change Password" className="mt-7"/>
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