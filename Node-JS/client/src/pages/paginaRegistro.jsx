import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"

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

        <div className="bg-slate-200 flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-white max-w-md w-full p-10 rounded-md">
                {
                    RegistroErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                            {error}
                        </div>
                    ))
                }

                <h1 className="text-black text-2xl font-bold">Registro</h1>

                <form onSubmit={onSubmit}>
                    <input type="text" {...register('nombre', {required: true})}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                        placeholder="Nombre" 
                    />
                    {
                        errors.nombre && (
                            <p className="text-red-500">El nombre es requerido</p>
                        )
                    }
                    <input type="email" {...register('email', {required: true})}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                        placeholder="Correo"
                    />
                    {
                        errors.email && (
                            <p className="text-red-500">Un email es requerido</p>
                        )
                    }
                    <input type="password" {...register('password', {required: true})}
                        className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                        placeholder="Contraseña"
                    />
                    {
                        errors.password && (
                            <p className="text-red-500">Una contraseña es requerida</p>
                        )
                    }
                    <button class="bg-teal-500 p-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2" type="submit">Registrar</button>
                </form>

                <p className="text-black flex gap-x-2 justify-between">
                        ¿Ya tienes una cuenta? <Link to="/login" className="bg-teal-500 p-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 text-white">Ingresar</Link>
                </p>
            </div>
        </div>
    );
}

export default PaginaRegistro;