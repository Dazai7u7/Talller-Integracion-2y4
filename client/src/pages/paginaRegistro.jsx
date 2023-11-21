import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import imgReg from "../Imagenes/imgReg.png";
import HeaderNoLog from '../Complements/HeaderNoLog.jsx';
import FooterConten from '../Complements/Footer.jsx';

function PaginaRegistro() {
  const {
    register, //Registro de datos de entrada
    handleSubmit, //Manejo de sesion del formulario
    formState: { errors }, //Manejo de errores
  } = useForm();
  
  const { signup, isAuthenticated, errors: RegistroErrors } = useAuth();
  const navigate = useNavigate();

  //Redireccionamiento si el usuario está autenticado
  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  //Envio de datos al servidor
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bg-slate-50 overflow-hidden">
      <header>
        <HeaderNoLog />
      </header>

      <div className="flex justify-end mx-8 mt-28 sm:flex sm:flex-col lg:flex-row">
        <div className="container mx-auto flex flex-col justify-center sm:w-full lg:w-1/2">
        
          <h1 className="text-center text-xl font-semibold text-teal-500 animate-slide-top">Psum dolor sit amet</h1>

          <div className="h-1/2 flex justify-center mt-4 border rounded-md bg-white border-white animate-slide-top2">
            <div className="flex items-center">
              <img className="h-20 w-20 mx-4 shadow rounded-full border border-teal-500 bg-gray-50" src={imgReg} alt=""/>
              <p className="text-black mx-2 ">
                Nunc et diam ut arcu finibus volutpat quis sit amet ex. 
                Donec tristique ligula eget nisi pellentesque, eget egestas 
                erat malesuada. Morbi scelerisque sapien id nisl volutpat, 
                id vehicula odio varius.
              </p>
            </div>
          </div>

          <div className="border mt-8 h-1/2 justify-center flex bg-white border-white rounded-md animate-slide-top3">
            <div className="flex items-center">
              <img className="h-20 w-20 mx-4 shadow rounded-full border border-teal-400 bg-gray-50" src={imgReg} alt=""/>
              <p className="text-black mx-2 ">
                Nunc et diam ut arcu finibus volutpat quis sit amet ex. 
                Donec tristique ligula eget nisi pellentesque, eget egestas 
                erat malesuada. Morbi scelerisque sapien id nisl volutpat, 
                id vehicula odio varius.
              </p>
            </div>
          </div>

          <div className="border mt-8 h-1/2 justify-center flex bg-white border-white rounded-md animate-slide-top4">
            <div className="flex items-center">
              <img className="h-20 w-20 mx-4 shadow rounded-full border border-teal-400 bg-gray-50" src={imgReg} alt=""/>
              <p className="text-black mx-2">
                Nunc et diam ut arcu finibus volutpat quis sit amet ex. 
                Donec tristique ligula eget nisi pellentesque, eget egestas 
                erat malesuada. Morbi scelerisque sapien id nisl volutpat, 
                id vehicula odio varius.
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-white sm:mx-auto sm:mt-8 lg:mt-0 lg:mx-0 max-w-md w-full shadow p-10 rounded-md border mx-3 animate-slide-left">
          {RegistroErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))}

          <h1 className="text-black text-2xl font-bold text-center">Registro</h1>
          <hr className="mt-2 bg-black shadow" />

          <form onSubmit={onSubmit}>
            <p className="text-black mt-4">Nombre</p>
            <input
              type="text"
              {...register('nombre', { required: true })}
              className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500" autoComplete="off"
            />
            {errors.nombre && (
              <p className="text-red-500">El nombre es requerido</p>
            )}

            <p className="text-black mt-2">Correo</p>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500" autoComplete="off"
            />
            {errors.email && (
              <p className="text-red-500">Un email es requerido</p>
            )}

            <p className="text-black mt-2">Contraseña</p>
            <input
              type="password"
              {...register('password', { required: true })}
              className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
            />
            {errors.password && (
              <p className="text-red-500">Una contraseña es requerida</p>
            )}

            <button className="mt-4  rounded-md w-24 h-8 text-white border border-white bg-teal-500 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
              Registrarse
            </button>
          </form>

          <p className="text-black flex gap-x-2 justify-between mt-2 items-center">
            ¿Ya tienes una cuenta?
            <Link
              to="/login"
              className="text-white border border-white bg-teal-500 rounded-md w-20 h-8 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white flex items-center justify-center"
            >
              Ingresar
            </Link>
          </p>
        </div>

        
        
      </div>

      <footer>
        <FooterConten />
      </footer>
    </div>
  );
}

export default PaginaRegistro;
