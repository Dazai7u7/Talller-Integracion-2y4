import React, { useState } from 'react';
import FooterConten from '../Complements/Footer.jsx';
import HeaderLog from '../Complements/HeaderLog.jsx';
import axios from 'axios';

function PaginaFormGastos() {
  
  // Estado para almacenar la nueva entrada del producto
  const [newItem, setNewItem] = useState({ producto: '', descripcion: '', amount: 0 });

  // Define selectedCategory aquí
  const [selectedCategory, setSelectedCategory] = useState(''); 

  const [newPresupuesto, setNewPresupuesto] = useState({ presupuesto: '' });

   // Función para manejar la entrada de un nuevo elemento
  const handleAddItem = async () => {

    
    try {
      // Verifica que los campos no estén vacíos y que el valor no sea negativo
      if (!newItem.producto || !newItem.descripcion || newItem.amount <= 0 || !selectedCategory) {
        console.error("Todos los campos son obligatorios y los valores ingresados no pueden ser números negativos");
        return;
      }

      //Construccion de objeto
      const newItemData = {
        userId: usuario.id,
        producto: newItem.producto,
        descripcion: newItem.descripcion,
        amount: newItem.amount,
        category: selectedCategory,
      };

      //Envio de datos al servidor
      const response = await axios.post('/gastos', newItemData);

      console.log("Datos guardados", response.data);

      //reestablecimiento del estado local newitem

      setNewItem({ producto: '', descripcion: '', amount: 0 });
    } catch (error) {
      console.error('No se ha podido agregar el gasto', error);
    }
  };

  // Función para manejar cambios en la entrada del nuevo elemento
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Lista de categorías de gastos
  const categories = ['Comida', 'Higiene', 'Transporte', 'Entretenimiento', ' Otro'];

  // Función para manejar cambios en la selección de categoría
  const handleCategoryChange = (event) => {
    // Actualiza el estado con la categoría seleccionada
    setSelectedCategory(event.target.value);
  };



  /*const handleAddPresupuesto = async () => {
    try {
      if (!newPresupuesto.presupuesto) {
        console.error("El campo de presupuesto es obligatorio");
        return;
      }

      const newPresupuestoData = {
        presupuesto: newPresupuesto.presupuesto,
      };

      // Llamada a la función del controlador para agregar el presupuesto
      //const response = await axios.post('/api/presupuesto.model.js', newPresupuestoData);

      console.log("Presupuesto guardado", response.data);

      setNewPresupuesto({ presupuesto: '' });
    } catch (error) {
      console.error('No se ha podido agregar el presupuesto', error);
    }
  };
  */
  return (

    <div className="bg-slate-50">
      <header>
        <HeaderLog />
      </header>

      

      <div className="flex mx-8 mt-28 justify-between">

        <div className='text-black'>Lista prueba</div>
        
        <div className='flex flex-col'>

          <div>
            <div className="bg-white max-w-md w-full p-10 rounded-md border mx-4">
              <h1 className="text-black text-2xl font-bold text-center">Agregar Presupuesto</h1>
              <hr className="mt-2 bg-black shadow" />

              <div className="mb-4 mt-4">
                <input
                  type="number"
                  name="presupuesto"
                  //value={newPresupuesto.presupuesto}
                  //onChange={handlePresupuestoChange}
                  className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                  autoComplete="off"
                />
                <button
                  type="button"
                  //onClick={handleAddPresupuesto}
                  className="mt-4  rounded-md w-24 h-8 text-white border border-white bg-teal-500 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white"
                >
                  Agregar
                </button> 
              </div>
            </div>
          </div>
          


          <div className="bg-white max-w-md w-full p-10 rounded-md border mx-4 mt-4">
            <h1 className="text-black text-2xl font-bold text-center">Agregar Gastos</h1>
            <hr className="mt-2 bg-black shadow" />
            {/* Formulario para agregar elementos al presupuesto */}
            <div className="mb-4">

              <label className="text-black mt-4">Nombre del producto:</label>
              <input
                type="text"
                name="producto"
                value={newItem.producto}
                onChange={handleInputChange}
                className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                autoComplete="off"
              />

              <label className="text-black mt-2">Descripción:</label>
              <input
                type="text"
                name="descripcion"
                value={newItem.descripcion}
                onChange={handleInputChange}
                className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                autoComplete="off"
              />

              <label className="text-black mt-2">Valor:</label>
              <input
                type="number"
                name="amount"
                value={newItem.amount}
                onChange={handleInputChange}
                className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
              />

              {/* Etiqueta y lista desplegable para seleccionar la categoría */}
              <label htmlFor="expenseCategory" className="text-black mt-2">Tipo de Gasto:</label>
              <select
                className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
                id="expenseCategory"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >

                {/* Opción por defecto deshabilitada para indicar selección */}
                <option className="block text-sm text-black font-semibold mb-2 " disabled>Seleccionar Gasto</option>
                {/* Mapeo de categorías para renderizar opciones */}
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleAddItem}
                className="mt-4  rounded-md w-24 h-8 text-white border border-white bg-teal-500 hover:scale-110 ease-in-out duration-300 hover:text-teal-500 hover:border-teal-500 hover:bg-white"
              >
                Enviar
              </button>
            </div>  
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