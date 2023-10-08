import { useState } from "react";

function PaginaFormGastos() {

 
   // Estado para almacenar los elementos del presupuesto
   const [budgetItems, setBudgetItems] = useState([]);
   // Estado para almacenar la nueva entrada del presupuesto
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
 
   // Calcular el total del presupuesto
   const totalBudget = budgetItems.reduce((total, item) => total + parseFloat(item.amount), 0);
 
   // Estado para almacenar la categoría seleccionada
   const [selectedCategory, setSelectedCategory] = useState('');
   
   // Lista de categorías de gastos
   const categories = ['Comida', 'Higiene', 'Transporte', 'Entretenimiento', 'Otros'];
 
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
             <div className="bg-white max-w-md h-[calc(100vh-100px)] w-[calc(100vh-100px)] p-10 rounded-md">
             
                 
       <h1 className="text-black text-2xl font-bold">Agregar Gastos</h1>
 
       {/* Formulario para agregar elementos al presupuesto */}
       <div className="mb-4">
       <label htmlFor="budgetInput" className="text-black rounded-black "> Presupuesto: </label>
         <input
           type="number"
           id="budgetInput"
           onChange={(e) => addBudget(parseInt(e.target.value))}
           className="border p-2 mb-2 border-black text-black"
         />
  {/* Etiqueta y lista desplegable para seleccionar la categoría */}
  
 
       <label className="block text-sm text-black font-semibold mb-2">Nombre del producto:</label>
         <input
           type="text"
           name="producto"
           value={newItem.producto}
           onChange={handleInputChange}
           className="border p-2 mb-2 border-black text-black"
         />
 
       <label className="block text-sm text-black font-semibold mb-2">Descripcion del producto</label>
       <input 
         type="text"
         name="descripcion"
         value={newItem.descripcion}
         onChange={handleInputChange}
         className="border p-2 mb-2 border-black text-black"
         />
 
       {/* Mostrar la categoría seleccionada */}
       <label htmlFor="expenseCategory" className="block text-sm text-black font-semibold mb-2">Tipo de Gasto:</label>
       <select className="text-black border p-2 mb-2"
         id="expenseCategory"
         value={selectedCategory}
         onChange={handleCategoryChange}
       >
         {/* Opción por defecto deshabilitada para indicar selección */}
         <option className="block text-sm text-black font-semibold mb-2 " value="" disabled>Seleccionar Gasto</option>
 
         {/* Mapeo de categorías para renderizar opciones */}
         {categories.map((category, index) => (
           <option key={index} value={category}>
             {category}
           </option>
         ))}
       </select>
 
       <p className="text-black">Categoría seleccionada: {selectedCategory}</p>
 
 
         <label className="block text-sm text-black font-semibold mb-2">Valor del producto:</label>
         <input
           type="number"
           name="amount"
           value={newItem.amount}
           onChange={handleInputChange}
           className="border p-2 mb-2 border-black text-black"
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
               {item.producto}: ${item.amount}
             </li>
           ))}
         </ul>
       </div>
 
       {/* Total del presupuesto */}
                 <div>
                 <h2 className="text-black">Resumen</h2>
         <p className="text-black">Presupuesto: ${budget-totalBudget}</p>
                     <h2 className="text-xl text-black font-bold mb-2">Total de Gastos: ${totalBudget}</h2>
                 </div>
             </div>
     </div>
   );
};
export default PaginaFormGastos;