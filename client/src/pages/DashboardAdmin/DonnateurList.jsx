import React from 'react';
import { useState, useEffect } from 'react';
import { GetAllDonnateurs, DeleteDonnateur, AcceptDonnateur } from '../../Utils/Requests'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nodata from '../../Assets/images/nodata.png'

function DonnateurList() {

  const [donnateur, setDonnateur] = useState([])

  // Retrieve token from localstorage
  const token = localStorage.getItem('token')


  // function In case Notifu succes 
  function notify() {
    toast.success('Demande Supprimer Avec Succés', {
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

  // fetch data 
  useEffect(() => {
    try {
      GetAllDonnateurs(token).then((data) => {
        setDonnateur(data)
      }).catch((err) => {
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])


  // function Accept Donnateur:
  const Accept = (id) => {
      try {
        AcceptDonnateur(id,token).then((data) => {
          console.log(data);
          GetAllDonnateurs(token)
        }).catch((err) => {
          console.log(err);
        })
      } catch (error) {
          console.log(error)
      }
  }

  // Function delete donnateur:
  const deleteDonnateur = (id) => {
    try {
      DeleteDonnateur(id,token).then(() => {
        let res = donnateur.filter((donn) => donn._id !== id)
        setDonnateur(res)
        notify()
      }).catch((err) => {
        console.log(err)
        notifyerr()
      })
    } catch (error) {
      notifyerr()
      console.log(error);
    }
  }

  return (
    <div>
      <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
        <h1 className='text-3xl font-bold mb-2'>List des Donnateurs</h1>
        <small>
          Pour accepter une demande de donateur, vous devez appuyer sur le bouton vert qui se trouve sur la page correspondante. Une fois que vous aurez appuyé sur ce bouton, la demande sera acceptée et le patient pourra voir les informations du donnateur.
        </small>



          <div class="overflow-x-auto rounded-lg border border-gray-200 mt-5 ">
            <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            {donnateur.length > 0 ? 
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
                  <th
                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                  >
                    Status
                  </th>
                </tr>
              </thead>) : (<p></p>)}
              {donnateur.length > 0 ? donnateur.map((donnateur) => (
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donnateur.First_Name}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donnateur.Second_Name}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donnateur.Email}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donnateur.Adresse}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donnateur.City}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donnateur.Phone_Number}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donnateur.NatureDeSang}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{donnateur.DateDeNaissance?.slice(0, 10)}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-orange-500">{donnateur.Status}</td>
                  <td class="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => { Accept(donnateur._id);console.log(donnateur._id);;console.log(token); }}
                      class="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white"
                    >
                      Acceptez
                    </button>
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => { deleteDonnateur(donnateur._id) }}
                      class="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white"
                    >Refusez</button>
                  </td>
                </tr>
              </tbody>)) : <div className='flex flex-col lg:flex-col justify-center items-center'>
          <img src={Nodata} alt="No data" />
          <p className='my-2 text-primary'>No data found !</p>
        </div>}
            </table>
          </div>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  )
}

export default DonnateurList
