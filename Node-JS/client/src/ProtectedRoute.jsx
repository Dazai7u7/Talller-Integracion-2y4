import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute() {
    const { usuario, isAuthenticated } = useAuth();
    console.log(usuario, isAuthenticated)
        
    if (!isAuthenticated) return <Navigate to='/login' replace />

    return <Outlet />;
}

export default ProtectedRoute;