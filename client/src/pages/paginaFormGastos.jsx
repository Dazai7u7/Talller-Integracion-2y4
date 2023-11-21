import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useGastos } from '../context/GastosContext';
import { useNavigate} from "react-router-dom";
import { usePresupuestos } from '../context/PresupuestoContext.jsx';


import HeaderLog from '../Complements/HeaderLog.jsx';
import FooterConten from '../Complements/Footer.jsx';


function PaginaFormGastos() {
  const { isAuthenticated } = useAuth();
  const { register, handleSubmit } = useForm();
  const { crearGasto } = useGastos()
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    if (isAuthenticated) {
      crearGasto(data);
    } else {
      navigate('/login');
    }
  });


  return (
    
    <div className="bg-slate-50">
      <header>
        <HeaderLog/>
      </header>

      <div className="flex mx-8 mt-20 justify-between overflow-hidden">

        <div className='flex flex-col'>
          <div className='text-black'>HOLA</div>

        </div>
        

        <div className='flex flex-col '>
          <div>
            <div className='bg-white max-w-md w-full p-10 rounded-md border mx-auto shadow animate-slide-left'>
              <h1 className='text-black text-2xl fond-bold text-center'>Agregar Presupuesto</h1>
              <hr className='mt-2 bg-black shadow'/>
              <div className='mb-4 mt-4'>
                <input type="number"
                  name='presupuesto'
                  className='w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black' autoComplete='off'
                  
                />
                <button type='button' className='mt-4 text-white border border-white bg-teal-500 rounded-md w-20  h-8 hover:scale-110 ease-in-out duration-300 hover:text-teal-500  hover:border-teal-500 hover:bg-white' onClick={onSubmit}>
                  
                  Añadir
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white mt-8 max-w-md w-full p-10 rounded-md border mx-auto shadow animate-slide-left2">
            <h1 className="text-black text-2xl fond-bold text-center"> Añadir Producto</h1>
            <hr className='mt-2 bg-black shadow'/>

            <form onSubmit={onSubmit}>
              <input 
                type="text"
                placeholder="Producto"
                {...register('producto')}
                className="w-full bg-white border border-black text-black px-4 py-2 rounded-md  my-2focus:outline-teal-400 mt-4"
                autoFocus
              />
              <textarea
                rows="3"
                placeholder="Descripcion"
                {...register('descripcion')}
                className="w-full bg-white border border-black text-black px-4 py-2 rounded-md my-2     focus:outline-teal-400"
              ></textarea>
              <input
                type="Number"
                placeholder="valor"
                {...register('valor')}
                className="w-full bg-white border border-black text-black px-4 py-2 rounded-md my-2       focus:outline-teal-400"
                autoFocus
              />
              <select
                {...register('tipo_de_gasto')}          
                className="w-full bg-white border border-black text-black px-4 py-2 rounded-md my-2       focus:outline-teal-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona el tipo de gasto
                </option>
                <option value="Higiene">Higiene</option>
                <option value="Transporte">Transporte</option>
                <option value="Alimenticio">Alimenticio</option>
                <option value="Entretenimiento">Entretenimiento</option>
                <option value="Otro">Otro</option>
              </select>
              <button className="mt-4 text-white border border-white bg-teal-500 rounded-md w-20  h-8 hover:scale-110 ease-in-out duration-300 hover:text-teal-500  hover:border-teal-500 hover:bg-white">
                Guardar
              </button>
            </form>
          </div>
        </div>
       

      </div>
      <footer>
        <FooterConten />
      </footer>

    </div>
  );
}

export default PaginaFormGastos;