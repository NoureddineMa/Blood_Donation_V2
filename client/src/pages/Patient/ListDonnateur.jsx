import React from 'react'
import { useEffect , useState } from 'react'
import { GetAllDonnateursAccepted } from '../../Utils/Requests'


function ListDonnateur() {

     // state for data:
     const [Donnateur , setDonnateur] = useState([])

     // Retrieve token from localstorage:
     const token = localStorage.getItem('token')
    //
    useEffect(() => {
       try {
        GetAllDonnateursAccepted(token).then((data) => {
           console.log(data)
           setDonnateur(data)
         }).catch((err) => {
           console.log('FOOO' + err);
         })
       } catch (error) {
         console.log(error);
       }
    }, [])

    return (
        <>
               <>
              <div class="overflow-x-auto rounded-lg border border-gray-200 my-5 ">
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
            {Donnateur.map((donn) => (
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{donn.First_Name}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donn.Second_Name}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donn.Email}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donn.Adresse}</td>
                <td class="whitespace-nowrap px-4 py-2 text-red-600">{donn.City}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donn.Phone_Number}</td>
                <td class="whitespace-nowrap px-4 py-2 text-red-600">{donn.NatureDeSang}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donn.DateDeNaissance.slice(0,10)}</td>
              </tr>
            </tbody>))}
          </table>
        </div>
        </>
        </>
    )
}

export default ListDonnateur
