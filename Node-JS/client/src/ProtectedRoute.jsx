import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute() {
    const { usuario, isAuthenticated } = useAuth();
        
    if (!isAuthenticated) return <Navigate to='/login' replace />

    return <Outlet />;
}

export default ProtectedRoute;