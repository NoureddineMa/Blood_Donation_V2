import { useLocation, Outlet, Navigate } from 'react-router-dom'
import Unauthorized from '../pages/NotFound'

const RequireAuth = ({ Roles }) => {


    
    const location = useLocation()
    const role = localStorage.getItem('nameRole')
    console.log(role);



    if (!role) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }


    if (Roles.indexOf(role) < 0) {
        return <Unauthorized />;
    }

    return <Outlet />;

}

export default RequireAuth