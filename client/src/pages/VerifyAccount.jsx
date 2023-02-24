import React from 'react'
import Spinner from '../Utils/Spinner'
import { useNavigate } from 'react-router-dom'



function VerifyAccount() {


    const navigate = useNavigate()

  return (
    <>
        <Spinner />
        <p>Account Succefully Verified </p>
        <small>u will be redirect to login </small>
        {
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        }
    </>
  )
}

export default VerifyAccount