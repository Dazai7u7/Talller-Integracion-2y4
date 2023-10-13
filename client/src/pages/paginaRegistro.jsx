import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import imgReg from "../Imagenes/imgReg.png";
import HeaderNoLog from '../Complements/HeaderNoLog.jsx';
import FooterConten from '../Complements/Footer.jsx';

function PaginaRegistro() {
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegistroErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bg-slate-50 overflow-hidden">
      <header>
        <HeaderNoLog />
      </header>
      
      <div className="flex  justify-center mx-8 mt-28">

        <div className="container flex flex-col items-center">
          
          <img class="w-32" src={imgReg} alt="vector img de moneda con tiempo" />

          <h1 class="text-center text-4xl text-teal-500">vitae consectetur</h1>

          <p className="text-black mt-2 w-4/5">
            Etiam pulvinar dignissim felis quis suscipit. Vivamus dapibus, justo vel fermentum interdum,
            dui nibh semper nisi, vitae commodo tortor nisl sed ipsum. Phasellus lobortis imperdiet dolor
            convallis tempor. Etiam at mauris sit amet velit euismod consectetur non et ligula. Suspendisse
            ornare, arcu quis finibus finibus, augue velit vulputate eros, at volutpat tellus velit vitae
            felis. Nullam vel sagittis leo, in ornare magna. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Suspendisse eleifend vel nibh non molestie. Mauris
            ornare et libero sed euismod.
          </p>
        </div>
          
        <div className="bg-white max-w-md w-full p-10 rounded-md border mx-4 animate-slide-left">
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
              className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
            />
            {errors.nombre && (
              <p className="text-red-500">El nombre es requerido</p>
            )}

            <p className="text-black mt-2">Correo</p>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
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
