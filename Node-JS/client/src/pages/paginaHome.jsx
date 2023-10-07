import HeaderNoLog from '../Complements/HeaderNoLog.jsx';
import FooterConten from '../Complements/Footer.jsx';
import Carrusel from "../Complements/Carrusel.jsx"
import img1 from "../Imagenes/imagen1.jpg"
import img2 from "../Imagenes/imagen2.jpg"
import img3 from "../Imagenes/imagen3.jpg"


import React from 'react';

const slides=[img1, img2, img3]


function PaginaHome() {
    return (
        <div class="bg-slate-200">
            <header>
                <HeaderNoLog/>
            </header>
            <div class="container flex mt-20 justify-between">

                <div class=" mx-10 w-1/2">

                    <h1 class="text-4xl text-teal-500">amet consectetur</h1>
                    
                    <p class="mt-4 text-black">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa non fuga
                        fugit vel tempore magni soluta odio pariatur esse amet iusto voluptatibus, quisquam 
                        explicabo obcaecati alias iure a dolore!quos eveniet necessitatibus, aliquam alias veritatis totam architecto quisquam soluta
                        ullam est, molestiae sit! Ex explicabo quas soluta corporis.
                    </p>

                    <p class="mt-4 text-black">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, repudiandae dolores
                        quos eveniet necessitatibus, aliquam alias veritatis totam architecto quisquam soluta
                        ullam est, molestiae sit! Ex explicabo quas soluta corporis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, repudiandae dolores
                    </p>

                    <p class="mt-4 text-black">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, repudiandae dolores
                        quos eveniet necessitatibus, aliquam alias veritatis totam architecto quisquam soluta
                    </p>
                </div>

                <main class="mx-10">
                    <div class="max-w-lg">
                        <Carrusel>
                            {slides.map((s) =>(
                                <img src={s}/>
                            ))}
                        </Carrusel>
                    </div>
                </main>
            </div>
            <footer>
                <FooterConten/>
            </footer>
        </div>
    )
}

export default PaginaHome;