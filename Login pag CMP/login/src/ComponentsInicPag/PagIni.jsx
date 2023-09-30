import React from 'react';
import {FooterConten} from './Footer';
import {ContenEjemp} from './ContenEjemp';
import {Formulario} from './Formulario';


const InitPag  = () => {
  return (
    <div>
      {/* Formulario de login */}
      <main class="flex flex-col md:flex-row justify-between mt-24 p-2 mx-4"> {/*Container de login*/}

        {/* Login */}
        <div class="w-full md:w-1/2 border rounded-lg shadow-md p-4 bg-white">
          <Formulario/>
        </div>

        {/* Contenidos de ejemplo */}
        <ContenEjemp/>
      </main>
      {/* Footer */}
      <FooterConten/>
    </div>
  );
}

export default InitPag;