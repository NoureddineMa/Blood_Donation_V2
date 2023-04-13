import { useState , createContext } from "react";


const RoleContext = createContext();


const RoleProvider = ({children}) => {

    const [authorizdRoutes,setAuthorizedRoutes] = useState('')
    
         return (
            <RoleContext.Provider value={{authorizdRoutes , setAuthorizedRoutes}} >
            {children}
            </RoleContext.Provider>   
         )
}

export default RoleContext;

export {RoleProvider };