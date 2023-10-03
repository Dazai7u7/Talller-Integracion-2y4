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

        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                {
                    RegistroErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                            {error}
                        </div>
                    ))
                }

                <h1 className="text-2xl font-bold">Registro</h1>

                <form onSubmit={onSubmit}>
                    <input type="text" {...register('nombre', {required: true})}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Nombre" 
                    />
                    {
                        errors.nombre && (
                            <p className="text-red-500">El nombre es requerido</p>
                        )
                    }
                    <input type="email" {...register('email', {required: true})}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Correo"
                    />
                    {
                        errors.email && (
                            <p className="text-red-500">Un email es requerido</p>
                        )
                    }
                    <input type="password" {...register('password', {required: true})}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Contraseña"
                    />
                    {
                        errors.password && (
                            <p className="text-red-500">Una contraseña es requerida</p>
                        )
                    }
                    <button type="submit">Registrar</button>
                </form>

                <p className="flex gap-x-2 justify-between">
                        ¿Ya tienes una cuenta? <Link to="/login" className="text-sky-500">Ingresar</Link>
                </p>
            </div>
        </div>
    );
}

export default PaginaRegistro;