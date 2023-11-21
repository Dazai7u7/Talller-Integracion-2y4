
import React, { createContext, useContext, useState } from 'react';

import { crearPresupuestoRequest } from '../api/presupuesto';


export const PresupuestoContext = createContext();

export const usePresupuestos = () => {
  const context = useContext(PresupuestoContext);
  if (!context) {
    throw new Error('usePresupuestos debe ser usado dentro de un PresupuestoProvider');
  }
  return context;
};

export function PresupuestoProvider({ children }) {
  const [presupuestos, setPresupuestos] = useState([]);

  const crearPresupuesto = async (presupuesto) => {
    try {
      const res = await crearPresupuestoRequest(presupuesto);
      console.log(res);
      // Actualizar el estado local con el nuevo presupuesto
      setPresupuestos([...presupuestos, res.data]);
    } catch (error) {
      console.error("Error al crear presupuesto:", error);
    }
  };

  return (
    <PresupuestoContext.Provider
      value={{
        presupuestos,
        crearPresupuesto,
      }}
    >
      {children}
    </PresupuestoContext.Provider>
  );
}

