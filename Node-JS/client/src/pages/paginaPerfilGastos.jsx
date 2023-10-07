<<<<<<< Updated upstream
import { useState } from "react";

function PaginaPerfilGastos  ()  {
  // Estado para almacenar los elementos del presupuesto
  const [budgetItems, setBudgetItems] = useState([]);
  // Estado para almacenar la nueva entrada del presupuesto
  const [newItem, setNewItem] = useState({ description: '', amount: 0 });

  // Función para manejar la entrada de un nuevo elemento
  const handleAddItem = () => {
    setBudgetItems([...budgetItems, newItem]);
    setNewItem({ description: '', amount: 0 });
  };

  // Función para manejar cambios en la entrada del nuevo elemento
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Calcular el total del presupuesto
  const totalBudget = budgetItems.reduce((total, item) => total + parseFloat(item.amount), 0);

  // Estado para almacenar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Lista de categorías de gastos
  const categories = ['Comida', 'Transporte', 'Entretenimiento', 'Salud', 'Otros'];

  // Función para manejar cambios en la selección de categoría
  const handleCategoryChange = (event) => {
    // Actualiza el estado con la categoría seleccionada
    setSelectedCategory(event.target.value);
  };
    //estado para almacenar presupuesto
  const [budget, setBudget] = useState(0);

  // Función para agregar presupuesto
  const addBudget = (amount) => {
    setBudget(amount);
  };

  return (
    <div className="bg-slate-200 flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-white max-w-md w-full p-10 rounded-md">
            
                
      <h1 className="text-black text-2xl font-bold">Agregar Gastos</h1>

      {/* Formulario para agregar elementos al presupuesto */}
      <div className="mb-4">
      <label htmlFor="budgetInput" className="text-black rounded-black "> Presupuesto: </label>
        <input
          type="number"
          id="budgetInput"
          onChange={(e) => addBudget(parseInt(e.target.value))}
          className="border p-2 mb-2 text-black"
        />
 {/* Etiqueta y lista desplegable para seleccionar la categoría */}
 

      <label className="block text-sm text-black font-semibold mb-2">Nombre del producto:</label>
        <input
          type="text"
          name="description"
          value={newItem.description}
          onChange={handleInputChange}
          className="border p-2 mb-2 text-black"
        />



      {/* Mostrar la categoría seleccionada */}
      <p>Categoría seleccionada: {selectedCategory}</p>
        <label className="block text-sm text-black font-semibold mb-2">Valor del produto:</label>
        <input
          type="number"
          name="amount"
          value={newItem.amount}
          onChange={handleInputChange}
          className="border p-2 mb-2 text-black"
        />

        <button
          type="button"
          onClick={handleAddItem}
          className="bg-blue-500 text-black py-2 px-4 rounded"
        >
          Agregar
        </button>
      </div>





      {/* Lista de elementos del presupuesto */}
      <div className="mb-4">
        <h2 className="text-xl text-black font-bold mb-2">Lista de Gastos</h2>
        <ul>
          {budgetItems.map((item, index) => (
            <li key={index} className="mb-2 text-black">
              {item.description}: ${item.amount}
            </li>
          ))}
        </ul>
      </div>

      {/* Total del presupuesto */}
                <div>
                <h2 className="text-black">Resumen</h2>
        <p className="text-black">Presupuesto: ${budget-totalBudget}</p>
        <p className="text-black">Total de Compras: ${totalBudget}</p>
                    <h2 className="text-xl text-black font-bold mb-2">Total de Gastos: ${totalBudget}</h2>
                </div>
            </div>
    </div>
  );
};

export default PaginaPerfilGastos;
=======
function PaginaPerfilGastos() {
    
    return (
        <div>
            Perfil
        </div>
    )
}

export default PaginaPerfilGastos;
>>>>>>> Stashed changes
