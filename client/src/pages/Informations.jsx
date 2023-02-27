import React, {useContext} from 'react'
import FormInformations from '../Containers/FormInformations'
import UserContext from '../Context/UserContext'

function Informations() {

  const  {user} = useContext(UserContext)

  return (

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center mb-7 max-w-max">
    <h1 className="text-2xl font-bold text-red-500  sm:text-3xl mb-5">Give us More Informations: {user?.First_Name} {user?.Second_Name}</h1>
    <p className="mt-4 text-gray-500">
    transfusions. In order to ensure that the donated blood is safe and effective,
     it is important to collect accurate information from the donors. 
     Similarly, when a patient is in need of blood transfusion, <br />
      it is important to collect accurate information about the patient in order to ensure
       the safety and effectiveness of the transfusion.
    </p>
  </div>
    <FormInformations />
</div>


   
  )
}

export default Informations