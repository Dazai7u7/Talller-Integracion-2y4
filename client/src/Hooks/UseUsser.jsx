import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

export function useUsser(){

    //Contexto de autenticación

    const {isAuthenticated, signin} = useContext(AuthContext)

    return{
        isLogged: isAuthenticated,
        signin
    };
}


export default useUsser; 