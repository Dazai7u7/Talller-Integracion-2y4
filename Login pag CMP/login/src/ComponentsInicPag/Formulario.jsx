import imgcorreo from '../imagenes/imagen-correo.png';
import imgpassword from '../imagenes/imagen-contraseña.png';
import { useState } from 'react';

export function Formulario(){
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(correo == "" || contraseña == ""){
            setError(true);
            return   
        }
        setError(false)
    };

    return(
        <section>
               
            <div>
                <div class="flex-initial p-2 mx-4" >
                    <h1 class="text-center text-xl">Login</h1>
                    <hr class="mt-2"/>
                    <label for="" id="Correo" class="text-lg md:text-lg block mt-4">Correo:</label>
                    <div class="mt-3 flex items-center">
                        <img class="h-10" src={imgcorreo} alt=""/>
                        <form action="" onSubmit={handleSubmit}>
                            <input class="mx-2 px-2 justify-center border-t border-b focus:outline-none" type="text"
                                value ={correo}
                                id="correo"
                                onChange={(e) => setCorreo(e.target.value)} 
                            />
                        </form>
                    </div>
            
                    <label for="" class="text-lg block mt-4">Contraseña:</label>
                    <div class="mt-3 flex items-center">
                        <img class="h-10" src={imgpassword} alt=""/>
                        <form action="" onSubmit={handleSubmit}>
                            <input class="mx-2 px-2 justify-center border-t border-b focus:outline-none" type="password"  
                                value={contraseña}
                                onChange={e => setContraseña(e.target.value)}
                            />
                        </form>
                    </div>
                    <div class="mt-6 flex justify-center">
                        <form action="" onSubmit={handleSubmit}>
                            <button class="text-white border border-white bg-teal-500 rounded-md w-20 h-8 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white" type="submit">
                                Entrar
                            </button>
                        </form>
                    </div>
                    {error && <p class="text-center mt-4" >Todos los campos son obligatorios</p>}
                </div>
            </div>
            
            
        </section>
    )
}