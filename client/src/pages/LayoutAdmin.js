import SidebarAdmin from '../components/SidebarAdmin';
import { Outlet } from 'react-router-dom';




const LayoutPatient = () => {
    return (
        <div className="flex bg-gray-50 dark:bg-gray-900">
      <SidebarAdmin />
      <div className="ml-96 py-24 w-full min-h-screen">
        <div>
            <Outlet />
        </div>
      </div>
    </div>
    )
}


export default  LayoutPatient