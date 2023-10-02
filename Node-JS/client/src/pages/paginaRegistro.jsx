import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

function PaginaRegistro() {
    const { 
        register,
        handleSubmit,
        formState: { errors }, }
        = useForm();
    const { signup, isAuthenticated, errors: RegistroErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/gastos');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        signup(values);
    });

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            {
                RegistroErrors.map((error, i) => 
                    <div className="bg-red-500 p-2 text-white" key={i}>
                        {error}
                    </div>
                )
            }
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
                <button type="submit">Registro</button>
            </form>
        </div>
    );
}

export default PaginaRegistro;