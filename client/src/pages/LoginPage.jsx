import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import CustomLabel from '../components/CustomLabel'
import { Link } from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';



function LoginPage() {

    const [email , setEmail] = useState();
    const [password, setPassword] = useState()

    const handleEmail = (e) => {
        return setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        return setPassword(e.target.value)
    }

    const loginHandler = (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        console.log(user);
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
                                <div>
                                    <CustomLabel for="Email" label="Your Email" />
                                    <CustomInput type="email" name="email" placeholder="example@gmail.com" value={email} onChange={handleEmail} />
                                </div>
                                <div>
                                    <CustomLabel for="Password" label="Your Email" />
                                    <CustomInput type="password" name="password" placeholder="***********" value={password}  onChange={handlePassword} />
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