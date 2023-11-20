import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useGastos } from '../context/GastosContext';
import { useNavigate, Link } from "react-router-dom";


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
    <div className="bg-white sm:mt-8 sm:mx-auto lg:mt-0 lg:mx-0 max-w-md w-full p-10 rounded-md shadow-lg animate-slide-left">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Producto"
          {...register('producto')}
          className="w-full bg-white border border-black text-black px-4 py-2 rounded-md my-2 focus:outline-teal-400"
          autoFocus
        />

        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register('descripcion')}
          className="w-full bg-white border border-black text-black px-4 py-2 rounded-md my-2 focus:outline-teal-400"
        ></textarea>

        <input
          type="Number"
          placeholder="valor"
          {...register('valor')}
          className="w-full bg-white border border-black text-black px-4 py-2 rounded-md my-2 focus:outline-teal-400"
          autoFocus
        />

        <select
          {...register('tipo_de_gasto')}          
          className="w-full bg-white border border-black text-black px-4 py-2 rounded-md my-2 focus:outline-teal-400"
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

        <button className="mt-4 text-white border border-white bg-teal-500 rounded-md w-20 h-8 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default PaginaFormGastos;