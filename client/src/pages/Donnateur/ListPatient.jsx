import React from 'react'
import  { GetAllPatients } from '../../Utils/Requests'
import axios from 'axios'
import { useEffect , useState } from 'react'

function ListPatient() {

    // state for data:
    const [Patient , setPatient] = useState([])

    // Retrieve token from localstorage:
    const token = localStorage.getItem('token')
   //
   useEffect(() => {
      try {
         GetAllPatients(token).then((data) => {
          console.log(data)
          setPatient(data)
        }).catch((err) => {
          console.log('FOOO' + err);
        })
      } catch (error) {
        console.log(error);
      }
   }, [])

    return (
        <>
              <div class="overflow-x-auto rounded-lg border border-gray-200 mt-5 ">
          <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Nom
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Prénom
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Email
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Adresse
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  City
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Numero de telephone
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Nature de sang
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Date de Naissance
                </th>
              </tr>
            </thead>
            {Patient.map((apartem) => (
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{apartem.First_Name}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{apartem.Second_Name}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{apartem.Email}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{apartem.Adresse}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{apartem.City}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{apartem.Phone_Number}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{apartem.NatureDeSang}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{apartem.DateDeNaissance}</td>
              </tr>
            </tbody>))}
          </table>
        </div>
        </>
    )   
}

export default ListPatient
