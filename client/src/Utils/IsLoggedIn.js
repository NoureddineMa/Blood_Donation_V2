import { useLocation, Outlet, Navigate } from 'react-router-dom'

const IsLoggedIn = () => {
    return (
        localStorage.getItem('token') ? <Outlet /> : <Navigate to="/" />
    )
}

export default IsLoggedIn