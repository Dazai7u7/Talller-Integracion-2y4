import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"

import HeaderNoLog from '../Complements/HeaderNoLog.jsx';
import FooterConten from '../Complements/Footer.jsx';

function PaginaRegistro() {
    const { 
        register,
        handleSubmit,
        formState: { errors }, }
        = useForm();
    const { signup, isAuthenticated, errors: RegistroErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/perfil-gastos');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });
    
    return (
        <div class="bg-slate-200">

            <header>
                <HeaderNoLog/>
            </header>

            <div className=" flex h-[calc(100vh-100px)] items-center justify-center">

                <div className="bg-white max-w-md w-full p-10 rounded-md">
                    {
                        RegistroErrors.map((error, i) => (
                            <div className="bg-red-500 p-2 text-white" key={i}>
                                {error}
                            </div>
                        ))
                    }

                    <h1 className="text-black text-2xl font-bold text-center">Registro</h1>
                    <hr className="mt-2 bg-black shadow"></hr>
                    <form onSubmit={onSubmit}>
                        <p class="text-black mt-4 fond-bold">Nombre</p>
                        <input type="text" {...register('nombre', {required: true})}
                            className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                        />
                        {
                            errors.nombre && (
                                <p className="text-red-500">El nombre es requerido</p>
                            )
                        }
                        <p class="text-black mt-2 fond-bold">Correo</p>
                        <input type="email" {...register('email', {required: true})}
                            className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                        />
                        {
                            errors.email && (
                                <p className="text-red-500">Un email es requerido</p>
                            )
                        }

                        <p class="text-black mt-2 fond-bold">Contraseña</p>
                        <input type="password" {...register('password', {required: true})}
                            className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                        />
                        {
                            errors.password && (
                                <p className="text-red-500">Una contraseña es requerida</p>
                            )
                        }
                        <button class="mt-4 text-white border border-white bg-teal-500 rounded-md w-24 h-8 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
                            Registrarse
                        </button>
                    </form>

                    <p className="text-black flex gap-x-2 justify-between mt-2 items-center">
                        ¿Ya tienes una cuenta?
                        <Link to="/login" className="text-white border border-white bg-teal-500 rounded-md w-20 h-8 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white flex items-center justify-center">
                            Ingresar
                        </Link>
                    </p>
                </div>
            </div>
            <footer>
                <FooterConten/>
            </footer>
        </div>
    );
}

export default PaginaRegistro;