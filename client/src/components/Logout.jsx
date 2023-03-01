import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

  const navigate = useNavigate()


  const logout = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <button onClick={logout} className="mx-4 text-sm font-normal">Logout</button>
  )
}

export default Logout