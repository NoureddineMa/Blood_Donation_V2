import React from 'react'
import Navbar from '../../components/compnentsDonnateur/Navbar'
import Card from '../../components/Card'
import Contact from '../../Assets/images/contact.png'
import Donate from '../../Assets/images/give.png'
import ListPatient from './ListPatient'

function PageDonnateur() {
  return (
    <div>
        <Navbar />
        <div className=' max-w-screen-xl mx-auto mt-11'>
        <div className='flex flex-col lg:flex-row justify-around'>
             <Card 
                svg= {Donate} 
                content="Le don de sang est un acte de générosité qui peut sauver des vies. Remplissez notre formulaire en cliquant ici." 
                button="Remplir le formulaire"
              />
             <Card 
                svg= {Contact} 
                content="Contactez-moi pour discuter de vos besoins et de la façon dont je peux vous aider à atteindre vos objectifs." 
                button="Contactez nous"
             />
        </div>
        <div className=''>
          <h1 className='my-7 mx-2 font-bold text-2xl'>Liste Des Patients</h1>
          <ListPatient />
        </div>
        </div>
    </div>
  )
}

export default PageDonnateur
