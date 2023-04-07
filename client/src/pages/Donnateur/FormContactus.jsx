import React from 'react'
import Navbar from '../../components/compnentsDonnateur/Navbar'
import FormContact from '../../components/compnentsDonnateur/FormContactDonnateur'

function FormContactus() {
  return (
    <div>
        <Navbar />
        <div className=' max-w-screen-xl mx-auto mt-11'>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contactez Nous</h2>
    <p className="mb-3 px-9  font-light text-center  text-black">Nous sommes ravis de recevoir vos commentaires, questions et idées sur notre site de don de sang. Notre équipe dévouée travaille sans relâche pour fournir les informations les plus précises et à jour sur les dons de sang, ainsi que pour aider les donneurs à trouver des lieux de don de sang dans leur région. Si vous avez des suggestions pour améliorer notre site ou si vous avez des questions sur les dons de sang, veuillez remplir le formulaire de contact ci-dessous et nous vous répondrons dès que possible.</p>
        <FormContact />
        </div>
    </div>
  )
}

export default FormContactus
