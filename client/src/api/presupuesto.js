import axios from "./axios.js";

export const getPresupuestosRequest = () => axios.get('/presupuestos');

export const getPresupuestoRequest = (id) => axios.get(`/presupuestos/${id}`);

export const crearPresupuestoRequest = (presupuesto) => axios.post('/presupuestos', presupuesto);

export const updatePresupuestoRequest = (presupuesto) => 
    axios.put(`/presupuestos/${presupuesto._id}`, { presupuesto });

export const borrarPresupuestoRequest = (id) => axios.delete(`/presupuestos/${id}`);

