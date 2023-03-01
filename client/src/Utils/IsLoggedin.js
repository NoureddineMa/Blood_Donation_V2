import React from 'react'
import { Navigate , Outlet } from 'react-router-dom'



function IsLoggedin() {
  return (
        localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" />
    )
}

export default IsLoggedin