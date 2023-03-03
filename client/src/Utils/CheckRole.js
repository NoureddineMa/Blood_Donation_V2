import { useLocation , Outlet , Navigate} from 'react-router-dom'
import Notfound from "../pages/NotFound"


const CheckRole = ({ Roles }) => {

    const location = useLocation()
    const role = localStorage.getItem('nameRole')

    if(!role){
        return <Navigate to="/login" state={{ from: location}}  replace/>
    }   

    if(Roles.indexOf(role) < 0){
        return <Notfound />
    }

    return <Outlet />

}

export default CheckRole;