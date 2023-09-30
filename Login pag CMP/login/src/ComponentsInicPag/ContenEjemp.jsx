import React from 'react';
import imgejemplo from '../imagenes/imagen_de_ejemplo.jpg';

export function ContenEjemp() {
  return (
    <section>

      <main class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 md:mx-6">

          <h1 class="mt-10 md:mt-16 text-2xl text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, esse rerum modi aliquam impedit nam.
          </h1>

          <p class="mt-6 text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Praesentium 
            perspiciatis in inventore et maiores, error doloremque, commodi deserunt
            ducimus rerum quod eligendi, impedit cum consequatur quae modi culpa vero nesciunt.
          </p>

        </div>
        
        {/* Imagen de ejemplo */}
        <div class="mt-10 md:mt-0 w-full md:w-1/2 self-center">

            <img class="border border-teal-500" src={imgejemplo} alt="#"/>

        </div>
      </main>
  
    </section>
  );
}