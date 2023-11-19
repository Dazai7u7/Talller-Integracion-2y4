import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import HeaderNoLog from '../Complements/HeaderNoLog.jsx';
import FooterConten from '../Complements/Footer.jsx';
import imgLogin from "../Imagenes/imgLogin.png"

function PaginaLogin() {
  //validacion de datos
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //obtencion de funciones de autenticacion
  const { signin, isAuthenticated, errors: LoginErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/perfil-gastos');
  }, [isAuthenticated]);

  //envio de datos
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="bg-slate-50 overflow-hidden">
      <header>
        <HeaderNoLog />
      </header>

      <div className="flex mt-28 mx-8 ">

        <div className="container flex flex-col items-center animate-slide-top">

          <img className="w-32" src={imgLogin} alt="vector img de moneda con tiempo" />
          
          <h1 className="text-center text-4xl text-teal-500">vitae consectetur</h1>
        
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
        

        <div className="bg-white max-w-md w-full p-10 rounded-md shadow-lg animate-slide-left">
          {LoginErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center" key={i}>
              {error}
            </div>
          ))}

          <h1 className="text-2xl font-bold text-black text-center">Login</h1>
          <hr className="mt-2 bg-black shadow"></hr>
          <form onSubmit={onSubmit}>
            <p className="text-black mt-4 fond-bold">Correo</p>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full bg-white border border-black text-black px-4 py-2 rounded-md my-2 focus:outline-teal-400"
            />
            {errors.email && <p className="text-red-500">Un email es requerido</p>}
            <p className="text-black mt-2">Contraseña: </p>
            <input
              type="password"
              {...register('password', { required: true })}
              className="w-full bg-white border border-black text-black px-4 py-2 rounded-md my-2 focus:outline-teal-400"
            />
            {errors.password && (
              <p className="text-red-500">Una contraseña es requerida</p>
            )}

            <button
              type="submit"
              className="mt-4 text-white border border-white bg-teal-500 rounded-md w-20 h-8 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white"
            >
              Ingresar
            </button>
          </form>

          <p className="flex gap-x-2 justify-between mt-4 text-black items-center">
            ¿No estás registrado aún?
            <Link
              to="/registro"
              className="text-white border border-white bg-teal-500 rounded-md w-20 h-8 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white flex items-center justify-center"
            >
              Regístrate
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

export default PaginaLogin;