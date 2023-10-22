import React from 'react';
import {Outlet, Link} from "react-router-dom";
 

export function HeaderLog() {
    return (
        <div className="bg-slate-200">
            <section>
                <header className="flex flex-wrap bg-teal-500 h-24 justify-between items-center shadow-md">
                    <div className="flex items-center px-8"> {/* Utiliza className en lugar de class */} 
                        <h2 className="justify-center px-2">CMP</h2>
                    </div>

                    {/* Nav que redirige a la página de registro e inicio de sesion */}

                    <nav className="px-8 text-xl justify-between">
                        <Link to="/" className="mx-4 px-4 py-1 text-center border border-white rounded text-white duration-300 bg-teal-500 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
                            Home
                        </Link>

                        <Link to="/perfil-gastos" className="mx-4 px-4 py-1 text-center border border-white rounded text-white duration-300 bg-teal-500 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
                            Perfil Gastos
                        </Link>

                        <Link to="/agregar-gasto" className="mx-4 px-4 py-1 text-center border border-white rounded text-white duration-300 bg-teal-500 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
                            Agregar Gastos
                        </Link>

                    </nav>
                </header>
                <Outlet/>
            </section>
        </div>
    )
}

export default HeaderLog;