import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

import PaginaLogin from './pages/paginaLogin.jsx'
import PaginaRegistro from './pages/paginaRegistro.jsx'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<PaginaLogin />} />
          <Route path='/registro' element={<PaginaRegistro />} />
          <Route path='/gastos' element={<h1>Gastos</h1>} />
          <Route path='/agregar-gasto' element={<h1>Nuevo gasto</h1>} />
          <Route path='/gastos/:id' element={<h1>Actualizar gasto</h1>} />
          <Route path='/perfil' element={<h1>Perfil</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App