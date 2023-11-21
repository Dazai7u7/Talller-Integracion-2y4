import React from 'react';
import HeaderNoLog from '../Complements/HeaderNoLog.jsx';
import HeaderLog from '../Complements/HeaderLog.jsx'; 
import FooterConten from '../Complements/Footer.jsx';
import useUsser from '../Hooks/UseUsser.jsx';

import Carrusel from "../Complements/Carrusel.jsx";
import img1 from "../Imagenes/imagen1.jpg";
import img2 from "../Imagenes/imagen2.jpg";
import img3 from "../Imagenes/imagen3.jpg";


// Lista de imágenes para el carrusel

const slides = [img1, img2, img3];

function PaginaHome() {

  const {isLogged} = useUsser(); // Hook de autenticación



  return (
    <div className=" bg-slate-50">
      <header>
        
        {isLogged ? <HeaderLog/> : <HeaderNoLog />} {/*// Aquí va el componente HeaderLog o HeaderNoLog dependiendo si el usuario está autenticado*/} 
    
      </header>

      <div className="mt-20 mx-8 flex justify-between">

        <div className='flex flex-col xl:flex-row md:flex-col'>

          <div className="sm:p-4 md:w-full xl:mx-8  xl:w-1/2">
            <h1 className="text-4xl text-teal-500 animate-slide-top ">amet consectetur</h1>
            <p className="mt-4 text-black animate-slide-top2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa non fuga fugit vel tempore magni
              soluta odio pariatur esse amet iusto voluptatibus, quisquam explicabo obcaecati alias iure a dolore! Quos
              eveniet necessitatibus, aliquam alias veritatis totam architecto quisquam soluta ullam est, molestiae sit! Ex
              explicabo quas soluta corporis.
            </p>
            <p className="mt-4 text-black animate-slide-top3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, repudiandae dolores quos eveniet
              necessitatibus, aliquam alias veritatis totam architecto quisquam soluta ullam est, molestiae sit! Ex explicabo
              quas soluta corporis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, repudiandae dolores
            </p>
            <p className="mt-4 text-black animate-slide-top4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, repudiandae dolores quos eveniet
              necessitatibus, aliquam alias veritatis totam architecto quisquam soluta
            </p>
          </div>

          <main className="mx-20 md:mx-auto sm:mt-8 animate-slide-top">
            <div className="sm:max-w-lg">

              <Carrusel> 

                {slides.map((s, index) => ( /*Mapeo  de elementos*/

                  <img src={s} key={index} alt={`Slide ${index}`} /> /*creacion de elementos img*/
                ))}

              </Carrusel>

            </div>
          </main>
        </div>
      </div>
      
      <footer>
        <FooterConten />
      </footer>
      
    </div>
  );
}

export default PaginaHome;