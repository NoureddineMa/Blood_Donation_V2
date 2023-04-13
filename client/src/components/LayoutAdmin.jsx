import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'


const LayoutAdmin = () => {
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900">
        <SideBar  />
    <div className=" w-full min-h-screen" style={{marginLeft: '16rem', paddingTop: '5rem'}}>
        <Outlet />
    </div>
    </div>
  )
}

export default LayoutAdmin
