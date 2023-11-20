import axios from "./axios.js";

export const getGastosRequest = () => axios.get('/gastos');

export const getGastoRequest = (id) => axios.get(`/gastos/${id}`);

export const crearGastoRequest = (gasto) => axios.post('/gastos', gasto);

export const updateGastoRequest = (gasto) => 
    axios.put(`/gastos/${gasto._id}`, { gasto });

export const borrarGastoRequest = (id) => axios.delete(`/gastos/${id}`);