import React from 'react'
import { useEffect , useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nodata from '../../Assets/images/nodata.png'
import { GetAllMessages , deleteMessage } from '../../Utils/Requests'

function MessagesPage() {

  const [messages , setMessages] = useState([])

  // retirieve token 
  const token = localStorage.getItem('token');


  // fetch data
  useEffect(() => {
    try {
      GetAllMessages(token).then((data) => {
        setMessages(data)
      }).catch((err) => {
        console.log(err);
      })
    } catch (error) {
      console.log(error);
    }
  } , [])

  // delete messages : 
  const deleteMsg = (id) => {
    try {
      deleteMessage(token,id).then(() => {
        let res = messages.filter((msg) => msg._id !== id)
        setMessages(res)
        notify()
      }).catch((err) => {
        console.log(err)
        notifyerr()
      })
    } catch (error) {
      console.log(error)
      notifyerr()
    }
  }

  function notify() {
    toast.success('Message Supprimeé Avec Succés', {
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
        <h1 className='text-3xl font-bold mb-2'>Messages </h1>

          <div class="overflow-x-auto rounded-lg border border-gray-200 mt-5 ">
            <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            {messages?.length > 0 ? 
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
                    Contexte
                  </th>
                  <th
                    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                  >
                    Message
                  </th>
                </tr>
              </thead>) : (<p></p>)}
              {messages?.length > 0 ? messages?.map((messages) => (
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="whitespace-nowrap px-3  py-2 text-gray-700">{messages.First_Name}</td>
                  <td class="whitespace-nowrap px-3  py-2 text-gray-700">{messages.Last_Name}</td>
                  <td class="whitespace-nowrap px-3  py-2 text-gray-700">{messages.Email}</td>
                  <td class="whitespace-nowrap px-3  py-2 text-gray-700">{messages.Contexte}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{messages.Message}</td>                 
                  <td class="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={ () => { deleteMsg(messages._id) }}
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

export default MessagesPage
