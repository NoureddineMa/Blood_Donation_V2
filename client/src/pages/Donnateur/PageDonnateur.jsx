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
        <div className='flex flex-col lg:flex-row justify-evenly'>
             <Card 
                svg= {Donate} 
                title="Sauvez des millers de personnes" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti ad illo fuga fugit impedit recusandae obcaecati laborum, sequi inventore, ut accusamus itaque a, sunt nemo nisi minima exercitationem hic?" 
                button="Remplir le formulaire"
              />
             <Card 
                svg= {Contact} 
                title="Contactez nous" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti ad illo fuga fugit impedit recusandae obcaecati laborum, sequi inventore, ut accusamus itaque a, sunt nemo nisi minima exercitationem hic?" 
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
