function PaginaLogin() {
    return (
        <div>
            <form onSubmit={onSubmit}>
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
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default PaginaLogin