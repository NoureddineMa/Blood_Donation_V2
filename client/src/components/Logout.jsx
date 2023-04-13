import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

    const nav = useNavigate()

    function handleLogout() {
      localStorage.clear()
      nav('/')
    }

  return (
    <button onClick={handleLogout} className="mx-4 text-sm font-normal">Logout</button>
  )
}

export default Logout