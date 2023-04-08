import React from 'react'
import CustomButton from '../CustomButton'
import CustomInput from '../CustomInput'
import CustomLabel from '../CustomLabel'

function FormPostDonnateur() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-md">
        <form action="#" className="space-y-8">
            <div>
                <CustomLabel label="Nom" />
                <CustomInput
                    type="text"
                    name="Nom"
                    placeholder="Veuillez entrez votre nom"
                />
            </div>
            <div>
                <CustomLabel label="Prenom" />
                <CustomInput
                    type="text"
                    name="Prenom"
                    placeholder="Veuillez entrez votre Prenom"
                />
            </div>
            <div>
                <CustomLabel label="Email" />
                <CustomInput
                    type="email"
                    name="email"
                    placeholder="Veuillez entrez votre Email"
                />
            </div>
            <div>
                <CustomLabel label="Adresse" />
                <CustomInput
                    type="text"
                    name="Adresse"
                    placeholder="Veuillez entrez votre Adresse"   
                />
            </div>
            <div className="sm:col-span-2">
                <CustomLabel 
                    type="text" 
                    label="City"
                />
                <CustomInput
                    type="text"
                    name="City"
                    placeholder="Veuillez entrez votre Adresse"   
                />
            </div>
            <div className="sm:col-span-2">
                <CustomLabel 
                    type="text" 
                    label="Numero de telephone"
                />
                <CustomInput
                    type="tel" 
                    id="phone" 
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    placeholder="Veuillez entrez votre Numero de telephone"   
                />
            </div>
            <div className="sm:col-span-2">
                <CustomLabel 
                    type="text" 
                    label="Nature de Sang"
                />
               <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option disabled selected>Choose a role</option>
                        <option value="Donnateur">Donnateur</option>
                        <option value="Patient">Patient</option>
                </select>
            </div>
            <div className="sm:col-span-2">
                <CustomLabel 
                    type="date" 
                    label="Date de Naissance"
                />
               <CustomInput 
                    type="date" 
                    id="date"
                    name="datedenaissance"
                />
            </div>
            <CustomButton
                type="submit"
                content="Envoyez"
            />
        </form>
    </div>
</section>
  )
}

export default FormPostDonnateur
