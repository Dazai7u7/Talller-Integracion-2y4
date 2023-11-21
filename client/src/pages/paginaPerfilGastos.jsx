import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderLog from '../Complements/HeaderLog.jsx';
import FooterConten from '../Complements/Footer.jsx';

function PaginaPerfilGastos() {
  const [monthlyData, setMonthlyData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('Selecciona el mes');

  useEffect(() => {
    // Realiza una solicitud a tu API para obtener datos mensuales
    // Reemplaza la URL con la URL de tu propia API
    axios
      .get(`http://localhost:3000/mensual?mes=${selectedMonth}`)
      .then((response) => {
        setMonthlyData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos mensuales:', error);
      });
  }, [selectedMonth]);

  return (

    <div className='bg-slate-200'>

      <header>
        <HeaderLog/>
      </header>
      <div>
        <div className=" flex items-center justify-end mt-8">

          <div className="bg-white max-w-md p-10 rounded-md">
            <h1 className="text-black text-2xl font-bold">Gastos mensuales</h1>

            <label className="text-black" htmlFor="monthSelector">
              Selecciona un mes:{" "}
            </label>
            <select
              id="monthSelector"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="text-black border p-2 mb-2 border-black"
            >
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
            </select>

            <h2 className="text-black">Datos para {selectedMonth}</h2>
            <ul>
              {monthlyData.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <FooterConten />
      </div>
    </div>
  );
}

export default PaginaPerfilGastos;