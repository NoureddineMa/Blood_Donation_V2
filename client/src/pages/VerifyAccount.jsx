import {useEffect , useState} from 'react'
import Spinner from '../Utils/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import {VerifyAcc} from '../Utils/Requests'



function VerifyAccount() {

  const [succes , setSucces] = useState(false)
  const [msgSucces , setMsgSucces] = useState()
  const [error , setError] = useState(false)
  const [msgError, setMsgError] = useState()
  const navigate = useNavigate()
  const {token} = useParams();

  useEffect(() => {
      try {
        const data = VerifyAcc(token)
        setSucces(true)
        setMsgSucces(data.message)
      } catch (error) {
        setError(true)
        setMsgError(error.message)
      }
  })
  
  return (
    <>
      <div className='flex flex-column justify-center align-center'>
        <Spinner />
        <p>{ succes && msgSucces}</p>
        <p>{ error && msgError}</p>
        <small className='mt-2'>u will be redirect to login ... </small>
        {
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        }
      </div>
    </>
  )
}

export default VerifyAccount