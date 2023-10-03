import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function PaginaLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signin, errors: LoginErrors } = useAuth();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                {LoginErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white text-center" key={i}>
                        { error }
                    </div>
                ))}

                <h1 className="text-2xl font-bold">Login</h1>

                <form onSubmit={onSubmit}>
                    <input type="email" {...register('email', {required: true})}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Correo"
                    />
                    {errors.email && <p className="text-red-500">Un email es requerido</p>}
                    
                    <input type="password" {...register('password', {required: true})}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Contraseña"
                    />
                    {errors.password && (
                        <p className="text-red-500">Una contraseña es requerida</p>
                    )}

                    <button type="submit">Ingresar</button>
                </form>
                
                <p className="flex gap-x-2 justify-between">
                    ¿No estas registrado aun? <Link to="/registro" className="text-sky-500">Registrate</Link>
                </p>
            </div> 
        </div>
    );
}

export default PaginaLogin;