import React from 'react'
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'
import CustomLabel from '../CustomLabel'
import { useState } from 'react'
import { PostForm } from '../../Utils/Requests'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormContact() {

    const [First_Name ,setFirstName] = useState('')
    const [Last_Name  ,setLastName] = useState('')
    const [Email ,setEmail] = useState('')
    const [Contexte ,setContexte] = useState('')
    const [Message ,setMessage] = useState('')

    // handle F_N
    const handleFirstName = (e) => {
        return setFirstName(e.target.value)
    }
    // handle L_N
    const handleLastName = (e) => {
        return setLastName(e.target.value)
    }
    // handle Email
    const handleEmail = (e) => {
        return setEmail(e.target.value)
    }
    // handle Contexte
    const handleContexte = (e) => {
        return setContexte(e.target.value)
    }
    // handle Message
    const handleMessage = (e) => {
        return setMessage(e.target.value)
    }

    // function In case Notifu succes 
    function notify(){
        toast.success('Message Envoyé Avec Succes', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }

    // function in case Notify Error
    function notifyerr(){
        toast.error('Merci de reessayez plus tard !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    // Send Data through API:
    const handleSubmit = async (e) => {
        e.preventDefault();
        const Msg = {
            First_Name,
            Last_Name,
            Email,
            Contexte,
            Message
        }
        try {
            PostForm(Msg).then((data) => {
                console.log(data.message)
                setFirstName('')
                setLastName('')
                setEmail('')
                setContexte('')
                setMessage('')
                notify()
            }).catch((err) => {
                console.log(err)
                notifyerr()
            })  
        } catch (error) {
            console.log(error)
            notifyerr()
        }
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-2 px-4 mx-auto max-w-screen-md">
                <form action="#" className="space-y-8">
                    <div>
                        <CustomLabel label="Nom" />
                        <CustomInput
                            type="text"
                            name="Nom"
                            placeholder="Veuillez entrez votre nom"
                            value={First_Name}
                            onChange={handleFirstName}
                        />
                    </div>
                    <div>
                        <CustomLabel label="Prenom" />
                        <CustomInput
                            type="text"
                            name="Prenom"
                            placeholder="Veuillez entrez votre Prenom"
                            value={Last_Name}
                            onChange={handleLastName}
                        />
                    </div>
                    <div>
                        <CustomLabel label="Email" />
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Veuillez entrez votre Email"
                            value={Email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <CustomLabel label="Contexte" />
                        <CustomInput
                            type="text"
                            name="message"
                            placeholder="Le Contexte de votre message"
                            value={Contexte}
                            onChange={handleContexte}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <CustomLabel 
                            type="text" 
                            label="Message"
                        />
                        <textarea
                            id="message" 
                            value={Message}
                            rows={6} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                            placeholder="Votre Message" 
                            onChange={handleMessage}
                        />
                    </div>
                    <CustomButton
                        type="submit"
                        content="Envoyez"
                        onClick={handleSubmit}
                    />
                </form>
            </div>
            <ToastContainer position="bottom-right"/>
        </section>
    )
}

export default FormContact
