import Sidebar from "../components/SidebarDonnateur";
import { Outlet } from 'react-router-dom';




const LayoutUsers = () => {
    return (
        <div className="flex bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="ml-96 py-24 w-full min-h-screen">
        <div>
            <Outlet />
        </div>
      </div>
    </div>
    )
}


export default  LayoutUsers