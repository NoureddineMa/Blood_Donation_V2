import React from 'react'
import { useState , useEffect } from 'react'
import { AllPatients , DeletePatient } from '../../Utils/Requests';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nodata from '../../Assets/images/nodata.png'


function PatientList() {

  const [patient, setPatient] = useState([])

  //RETRIEVE TOKEN
  const token = localStorage.getItem('token')

  useEffect(() => {
    try {
     AllPatients(token).then((data) => {
        setPatient(data)
     }).catch((err) => {
        console.log(err);
     })
    } catch (error) {
      console.log(error);
    }
  }, [])

  // delete patient 
  const Supprimer = (id) => {
    try {
      DeletePatient(id, token).then(() => {
        let res = patient.filter((pat) => pat._id !== id)
        setPatient(res)
        notify()
      }).catch((err) => {
        notifyerr()
      })
    } catch (error) {
        notifyerr()
    }
  }

   // function In case Notifu succes 
   function notify() {
    toast.success('Patient Supprimer Avec Succés', {
      position: "bottom-right",
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
  function notifyerr() {
    toast.error('Un erreur est Survenue , Merci de reessayez plus tard !', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div>
          <div>
      <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
        <h1 className='text-3xl font-bold mb-2'>List des Patient</h1>

          <div class="overflow-x-auto rounded-lg border border-gray-200 mt-5 ">
            <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            {patient?.length > 0 ? 
              (<thead>
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
                    Numéro de telephone
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
              </thead>) : (<p></p>)}
              {patient?.length > 0 ? patient?.map((patient) => (
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{patient.First_Name}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{patient.Second_Name}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{patient.Email}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{patient.Adresse}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{patient.City}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{patient.Phone_Number}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{patient.NatureDeSang}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{patient.DateDeNaissance?.slice(0, 10)}</td>                 
                  <td class="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => { Supprimer(patient._id)}}
                      class="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white"
                    >Supprimer</button>
                  </td>
                </tr>
              </tbody>)) : <div className='flex flex-col lg:flex-col justify-center items-center'>
              <img src={Nodata} alt="No data" />
          <p className='my-2 text-primary'>No data found !</p>
        </div>}
            </table>
          </div>
      </div>

    </div>
    <ToastContainer position="bottom-right" />
    </div>
  )
}

export default PatientList
