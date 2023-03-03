// import React , { useContext } from 'react'
// import { Navigate, useLocation, Outlet } from 'react-router-dom';
// import Notfound from '../pages/NotFound'
// import UserContext from '../Context/UserContext';

// function CheckRole( { roles }) {

//     const { user } = useContext(UserContext)
//     const userRoles = user?._roles.map((role) => role.role);
//     const token = localStorage.getItem('token')
//     const location = useLocation();

//     if(!token){
//         return <Navigate to="/login" state={{ from : location }}  replace/>
//     }

//     if(!userRoles.find((role) => roles.includes(role))) {
//         return <Notfound />
//     }
//     return <Outlet />;

// }


// export default CheckRole