import { createContext, useState, useContext, useEffect } from 'react';
import { registroRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth deveria de estar dentro de AuthProvide");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (usuario) => {
        try {
            const res = await registroRequest(usuario);
            console.log(res.data);
            setUsuario(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data);
        }
    }

    const signin = async (usuario) => {
        try {
            const res = await loginRequest(usuario)
            console.log(res)
            setIsAuthenticated(true)
            setUsuario(res.data)
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 3000)
            return () => clearTimeout(timer)
        } 
    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();

            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUsuario(null);
            }
            try {
                const res = await verifyTokenRequest(cookies.token);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                
                setIsAuthenticated(true)
                setUsuario(res.data)
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false)
                setUsuario(null)
                setLoading(false);
            }
        }
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            loading,
            usuario,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    );
};