
import logo from './imagenes/borrador-logo.png';
import imgejemplo from './imagenes/imagen_de_ejemplo.jpg';

import fbk from './imagenes/facebook-icon.png';
import twtr from './imagenes/twiter-icon.png';
import ing from './imagenes/instagram-icon.png';

import {Formulario} from './Components/Formulario';

function App() {
    return (        
    <div>

        {/* Barra de navegación */}
        <header class="flex flex-wrap bg-teal-500 h-24 justify-between items-center shadow-md">
            <div class="flex items-center px-8">{/* Mini container de imagen y texto */}
              <img class="h-16 flex" src={logo} alt="" />
              <h2 class="justify-center px-2">CMP</h2>
            </div>

            {/* Nav que redirige a la página de registro */}
            <nav>
              <a href="register.html" className="px-8 hover:text-indigo-700 text-xl text-white">Crear Cuenta</a>
            </nav>
        </header>

        <main class="flex flex-col md:flex-row justify-between mt-24 p-2 mx-4">

            {/* Login */}
            <div class="w-full md:w-1/3 border rounded-lg shadow-md p-4 bg-white">
                <Formulario/>
            </div>

            {/* Contenidos de ejemplo */}
            <div class="w-full md:w-1/2 md:mx-6">
                <h1 class="mt-10 md:mt-16 text-2xl text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, esse rerum modi aliquam impedit nam.</h1>
                <p class="mt-6 text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Praesentium 
                    perspiciatis in inventore et maiores, error doloremque, commodi deserunt
                    ducimus rerum quod eligendi, impedit cum consequatur quae modi culpa vero nesciunt.
                </p>
            </div>

            {/* Imagen de ejemplo */}
            <div class="mt-10 md:mt-0 w-full md:w-1/2 self-center">
                <img src={imgejemplo} alt=""/>
            </div>
        </main>
        
        {/* Footer */}
        <footer class="mt-32 flex  flex-col border justify-center bg-teal-300 shadow">
            <div class="flex justify-between mt-2 p-4 mx-4 ">

                <p class="mx-2 text-xl text-white font-semibold"> ipsum dolor sit</p>

                <div class="flex flex-wrap">
                    <img class="h-8 mx-2" src={fbk} alt=""/>
                    <img class="h-8 mx-2" src={twtr} alt=""/>
                    <img class="h-8 mx-2" src={ing} alt=""/>
                </div>
            </div>
            <hr class="border-white"/>
            <div class="flex justify-center mt-2 p-4 mx-4">
                <p class="text-white mx-2">adipiscing</p>
                <p class="text-white mx-2">adipiscing</p>
                <p class="text-white mx-2">adipiscing</p>
                <p class="text-white mx-2">adipiscing</p>
                <p class="text-white mx-2">adipiscing</p>
            </div>
        </footer>
    </div>
  );
}

export default App;