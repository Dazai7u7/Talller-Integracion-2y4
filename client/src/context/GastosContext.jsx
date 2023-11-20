import { createContext, useContext, useState } from "react";
import { crearGastoRequest,  } from "../api/gastos";

const GastosContext = createContext();

export const useGastos = () => {
    const context = useContext(GastosContext);

    if(!context) {
        throw new Error("useGastos debe usarse dentro de un GastosProvider") 
    }

    return context;
};

export function GastoProvider({ children }) {
    const [gastos, setGastos] = useState([]);

    const crearGasto = async (Gasto) => {
        const res = await crearGastoRequest(Gasto)
        console.log(res);
    }

    return (
        <GastosContext.Provider 
            value={{
                gastos,
                crearGasto
            }}
        >
            {children}
        </GastosContext.Provider>
    );
};