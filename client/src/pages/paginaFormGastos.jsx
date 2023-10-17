import React, { useState } from 'react';
import FooterConten from '../Complements/Footer.jsx';
import HeaderLog from '../Complements/HeaderLog.jsx';

function PaginaFormGastos() {

  // Estado para almacenar la nueva entrada del producto
  const [newItem, setNewItem] = useState({ producto: '', descripcion: '', amount: 0 });

  // Función para manejar la entrada de un nuevo elemento
  const handleAddItem = () => {
    setBudgetItems([...budgetItems, newItem]);
    setNewItem({ producto: '', descripcion: '', amount: 0 });
  };

  // Función para manejar cambios en la entrada del nuevo elemento
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Estado para almacenar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('');

  // Lista de categorías de gastos
  const categories = ['Comida', 'Higiene', 'Transporte', 'Entretenimiento', ' Entre Otros'];

  // Función para manejar cambios en la selección de categoría
  const handleCategoryChange = (event) => {
    // Actualiza el estado con la categoría seleccionada
    setSelectedCategory(event.target.value);
  };

  return (

    <div className="bg-slate-50">
      <header>
        <HeaderLog />
      </header>
      <div className="flex  justify-center mx-8 mt-28">

        <div className="container flex flex-col items-center">

          <h1 className="text-center text-4xl text-teal-500">Nose que poner</h1>

          <p className="text-black mt-2 w-4/5">
            Etiam pulvinar dignissim felis quis suscipit. Vivamus dapibus, justo vel fermentum interdum,
            dui nibh semper nisi, vitae commodo tortor nisl sed ipsum. Phasellus lobortis imperdiet dolor
            convallis tempor. Etiam at mauris sit amet velit euismod consectetur non et ligula. Suspendisse
            ornare, arcu quis finibus finibus, augue velit vulputate eros, at volutpat tellus velit vitae
            felis. Nullam vel sagittis leo, in ornare magna. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Suspendisse eleifend vel nibh non molestie. Mauris
            ornare et libero sed euismod.
          </p>
        </div>
    <div className="bg-white max-w-md w-full p-10 rounded-md border mx-4">

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
          />

          <label className="text-black mt-2">Descripción      :</label>
          <input
            type="text"
            name="descripcion"
            value={newItem.descripcion}
            onChange={handleInputChange}
            className="w-full bg-white text-black px-4 py-2 rounded-md my-2 border border-black focus:outline-teal-500"
          />

          <label className="text-black mt-2">Valor        :</label>
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

      <footer>
          <FooterConten />
      </footer>
</div>
  );
}

export default PaginaFormGastos;