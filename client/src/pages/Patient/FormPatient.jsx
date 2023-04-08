import React from 'react'
import Navbar from '../../components/componentsPatient/NavbarPatient'
import FormPostPatient from '../../components/componentsPatient/FormPostPatient'



function FormContactusPatient() {
  return (
    <div>
        <Navbar />
        <div className=' max-w-screen-xl mx-auto mt-11'>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Demande de don de sang</h2>
    <p className="mb-3 px-9  font-light text-center  text-black">Bienvenue sur notre page de demande de don de sang. Si vous êtes ici, c'est probablement parce que vous ou un être cher avez besoin d'une transfusion sanguine. Nous comprenons que cela peut être une situation difficile et stressante, c'est pourquoi nous sommes là pour vous aider. Veuillez remplir le formulaire ci-dessous avec vos informations et nous ferons de notre mieux pour vous mettre en contact avec des donneurs de sang potentiels. Nous vous rappelons que les dons de sang sont essentiels pour sauver des vies et que chaque don compte. Nous vous remercions de votre confiance en notre initiative et nous nous engageons à vous aider dans cette période difficile.</p>
    <FormPostPatient />
        </div>
    </div>
  )
}

export default FormContactusPatient
