import SidebarPatient from '../components/SidebarPatient';
import { Outlet } from 'react-router-dom';




const LayoutPatient = () => {
    return (
        <div className="flex bg-gray-50 dark:bg-gray-900">
      <SidebarPatient />
      <div className="ml-96 py-24 w-full min-h-screen">
        <div>
            <Outlet />
        </div>
      </div>
    </div>
    )
}


export default  LayoutPatient