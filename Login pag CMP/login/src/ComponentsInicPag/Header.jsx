import React from 'react';
import logo from '../imagenes/borrador-logo.png';
import {Outlet, Link} from "react-router-dom";


const Navegacion = () => {
  return (
    <section>
        <header class="flex flex-wrap bg-teal-500 h-24 justify-between items-center shadow-md">
            <div class="flex items-center px-8"> {/* Utiliza className en lugar de class */}
                <img class="h-16 flex" src={logo} alt="" />
                <h2 class="justify-center px-2">CMP</h2>

                <Link class="px-8 hover:text-indigo-700 text-xl text-white" to="/PagIni">Inicio</Link>
            </div>

            {/* Nav que redirige a la página de registro */}
            <nav>
        
                <Link class="px-8 hover:text-indigo-700 text-xl text-white" to="/Register">Crear Cuenta</Link>

              
            </nav>
            
        </header>
        
        <Outlet/>
        
    </section>
  );
}

export default Navegacion;