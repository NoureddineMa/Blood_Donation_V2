import {useState} from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import CustomLabel from '../components/CustomLabel'
import { Link } from 'react-router-dom'



function RegisterPage() {

    const [First_Name, setFirst_Name] = useState()
    const [Second_Name, setSecond_Name] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [_roles, set_roles] = useState()


    return (
        <>
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-red-600 dark:text-white">
                        Blood Donation
                    </a>
                            <h1 className=" font-bold leading-tight tracking-tight text-gray-900  dark:text-white">
                                Sign up to <span className='text-red-600'>save</span>  millions of people or to get <span className='text-red-600'>helped</span>  by Others ..
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <CustomLabel for="First_Name" label="First Name" />
                                    <CustomInput type="text" name="firstName" placeholder="First Name" />
                                </div>
                                <div>
                                    <CustomLabel for="Last_Name" label="Last Name" />
                                    <CustomInput type="text" name="LastName" placeholder="Last Name" />
                                </div>
                                <div>
                                    <CustomLabel for="email" label="Your Email" />
                                    <CustomInput type="email" name="email" placeholder="example@gmail.com" />
                                </div>
                                <div>
                                    <CustomLabel for="password" label="Password" />
                                    <CustomInput type="password" name="password" placeholder="*******" />
                                </div>
                                <div>
                                <CustomLabel for="Roles" label="Register as :" />
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option disabled selected>Choose a role</option>
                                        <option value="Donnateur">Donnateur</option>
                                        <option value="Patient">Patient</option>
                                    </select>
                                </div>
                                <CustomButton type="submit" content="Register" />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already Have A account? <Link to="/login" className="font-medium text-red-600 hover:underline dark:text-red-500">Sign in</Link>
                                </p>
                            </form>
        </>
    )
}

export default RegisterPage