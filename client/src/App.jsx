import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProtectedRoute } from './ProtectedRoute.jsx';

import PaginaLogin from './pages/paginaLogin.jsx';
import PaginaRegistro from './pages/paginaRegistro.jsx';
import PaginaPerfilGastos from './pages/paginaPerfilGastos.jsx';
import PaginaFormGastos from './pages/paginaFormGastos.jsx';
import PaginaHome from './pages/paginaHome.jsx';
import { GastoProvider } from './context/GastosContext.jsx';

function App() {
  return (
    <AuthProvider>
      <GastoProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PaginaHome/>}/>
            <Route path='/login' element={<PaginaLogin />} />
            <Route path='/registro' element={<PaginaRegistro />} />
              
            <Route element={<ProtectedRoute/>}>
              <Route path='/perfil-gastos' element={<PaginaPerfilGastos />} />
              <Route path='/agregar-gasto' element={<PaginaFormGastos />} />
              <Route path='/gastos/:id' element={<PaginaFormGastos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GastoProvider>
    </AuthProvider>
  );
}

export default App;