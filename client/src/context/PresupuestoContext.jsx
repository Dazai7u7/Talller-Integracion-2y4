/*
import React, { createContext, useContext, useState } from 'react';
import { presupuestosRequest } from '../api/auth';


export const PresupuestoContext = createContext();

export const usePresupuestos = () => {
  const context = useContext(PresupuestoContext);
  if (!context) {
    throw new Error('usePresupuestos debe ser usado dentro de un PresupuestoProvider');
  }
  return context;
};

export const PresupuestoProvider = ({ children }) => {
  const [presupuestos, setPresupuestos] = useState([]);

  const agregarPresupuesto = (nuevoPresupuesto) => {

    setPresupuestos([...presupuestos, nuevoPresupuesto]);
  };

  const eliminarPresupuesto = (id) => {
    setPresupuestos(presupuestos.filter((presupuesto) => presupuesto.id !== id));
  };

  return (
    <PresupuestoContext.Provider value={{ presupuestos, agregarPresupuesto, eliminarPresupuesto }}>
      {children}
    </PresupuestoContext.Provider>
  );
};
*/


