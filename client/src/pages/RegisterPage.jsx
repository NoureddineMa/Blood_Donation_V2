import {useState} from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import CustomLabel from '../components/CustomLabel'
import { Link } from 'react-router-dom'
import {register} from '../Utils/Requests'
import Alert from '../Utils/Alert'



function RegisterPage() {

    const [First_Name, setFirst_Name] = useState()
    const [Second_Name, setSecond_Name] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [_roles, set_roles] = useState()
    const [msg , setMsg] = useState()
    const [error , setError] = useState(false)
    const [msgSucces , setMsgSucces] = useState()
    const [notError , setNotError] = useState(false)


    const handleFirst_Name = (e) => {
        return setFirst_Name(e.target.value)
    }
    const handleSecond_Name = (e) => {
        return setSecond_Name(e.target.value)
    }
    const handleEmail = (e) => {
        return setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        return setPassword(e.target.value)
    }
    const handleroles = (e) => {
        return set_roles(e.target.value)
    }


    const handleRegister = async (e) => {
        e.preventDefault()
        const user = {
            First_Name,
            Second_Name,
            Email,
            Password,
            _roles
        }
        try {
            const data = await register(user)
            setMsgSucces(data.message)
            setNotError(true)
            setError(false)

        } catch (error) {
            console.log(error?.response?.data?.message);
            setError(true)
            setNotError(false)
            setMsg(error?.response?.data?.message)
        }
    }
    
    return (
        <>
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-red-600 dark:text-white">
                        Blood Donation
                    </a>
                            <h1 className=" font-bold leading-tight tracking-tight text-gray-900  dark:text-white">
                                Sign up to <span className='text-red-600'>save</span>  millions of people or to get <span className='text-red-600'>helped</span>  by Others ..
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                {error && <Alert message={msg} className="flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3"  />}
                                {notError && <Alert message={msgSucces} className="flex items-center bg-yellow-400 text-white text-sm font-bold px-4 py-3"  />}
                                <div>
                                    <CustomLabel for="First_Name" label="First Name" />
                                    <CustomInput type="text" name="firstName" placeholder="First Name" onChange={handleFirst_Name}  />
                                </div>
                                <div>
                                    <CustomLabel for="Last_Name" label="Last Name" />
                                    <CustomInput type="text" name="LastName" placeholder="Last Name"  onChange={handleSecond_Name}  />
                                </div>
                                <div>
                                    <CustomLabel for="email" label="Your Email" />
                                    <CustomInput type="email" name="email" placeholder="example@gmail.com"  onChange={handleEmail}  />
                                </div>
                                <div>
                                    <CustomLabel for="password" label="Password" />
                                    <CustomInput type="password" name="password" placeholder="*******" onChange={handlePassword} />
                                </div>
                                <div>
                                <CustomLabel for="Roles" label="Register as :" />
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={handleroles}>
                                        <option disabled selected>Choose a role</option>
                                        <option value="Donnateur">Donnateur</option>
                                        <option value="Patient">Patient</option>
                                    </select>
                                </div>
                                <CustomButton type="submit" content="Register"  onClick={handleRegister} />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already Have A account? <Link to="/login" className="font-medium text-red-600 hover:underline dark:text-red-500">Sign in</Link>
                                </p>
                            </form>
        </>
    )
}

export default RegisterPage