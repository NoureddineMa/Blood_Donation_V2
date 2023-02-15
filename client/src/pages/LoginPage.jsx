import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import CustomLabel from '../components/CustomLabel'
import { Link } from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';
import Alert from '../Utils/Alert'
import Api from '../Utils/Api'
import { login } from '../Utils/Requests'


function LoginPage() {

    const [Email , setEmail] = useState();
    const [Password, setPassword] = useState()
    const [error ,setError] = useState(false)
    const handleEmail = (e) => {
        return setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        return setPassword(e.target.value)
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        const user = {
            Email,
            Password
        }
        try {
            const data = await login(user)
                console.log(data);
        } catch (error) {
            setError(error?.response?.data?.message)
        }
    }
    return (
        <>
            
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-red-600 dark:text-white">
                        Blood Donation
                    </a>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                {error && <Alert message={error}  className="flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3" /> }
                                <div>
                                    <CustomLabel for="Email" label="Your Email" />
                                    <CustomInput type="Email" name="Email" placeholder="example@gmail.com" value={Email} onChange={handleEmail} />
                                </div>
                                <div>
                                    <CustomLabel for="Password" label="Your Email" />
                                    <CustomInput type="Password" name="Password" placeholder="***********" value={Password}  onChange={handlePassword} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Link to="/forgetpassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                </div>
                                    <CustomButton onClick={loginHandler} content="Submit" />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/register" className="font-medium text-red-600 hover:underline ">Sign up</Link>
                                </p>
                            </form>
        </>
    )
}

export default LoginPage