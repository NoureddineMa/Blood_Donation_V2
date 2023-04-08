import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/componentsPatient/NavbarPatient'
import Card from '../../components/Card'
import Contact from '../../Assets/images/contact.png'
import Donate from '../../Assets/images/need.png'
import ListDonnateur from './ListDonnateur'

function PageDonnateur() {

  const nav = useNavigate()

  const Donation = () => {
    nav('/formPatient')
  }
  const ContactDonnateur = () => {
    nav('/ContactPatient')
  }


  return (
    <div>
        <Navbar />
        <div className=' max-w-screen-xl mx-auto mt-11'>
        <div className='flex flex-col lg:flex-row justify-around'>
             <Card 
                svg= {Donate} 
                content="Le don de sang est un acte de générosité qui peut sauver des vies. Remplissez notre formulaire en cliquant ici." 
                button="Remplir le formulaire"
                onClick={Donation}
              />
             <Card 
                svg= {Contact} 
                content="Contactez-moi pour discuter de vos besoins et de la façon dont je peux vous aider à atteindre vos objectifs." 
                button="Contactez nous"
                onClick={ContactDonnateur}
             />
        </div>
        <div className=''>
          <h1 className='my-7 mx-2 font-bold text-2xl'>Liste Des Donnateurs</h1>
          <ListDonnateur />
        </div>
        </div>
    </div>
  )
}

export default PageDonnateur
