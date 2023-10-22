import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

export function useUsser(){
    const {isAuthenticated, login} = useContext(AuthContext)

    return{
        isLogged: isAuthenticated,
        login
    };
}


export default useUsser; 