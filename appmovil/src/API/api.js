// src/API/api.js
import axios from 'axios';
import {checkToken} from './token.js'
const BASE_URL = 'http://192.168.0.11:3000/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const registrarUsuario = async (nombre, email, contraseña) => {
  console.log(nombre,email,contraseña)
  try {
    const response = await axios.post(`${BASE_URL}/registro`, {
      nombre: nombre,
      email: email,
      password: contraseña,
    });
    return( response)
  } catch (error) {
    return(error)
  }
};

export const iniciarSesion = async (email, contraseña) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password: contraseña,
    });
    console.log(response.data.token)
    return(response)
  } catch (error) {
    return(error)
  }
};

export const token = async () => {
  const token = checkToken();
  try {
    const response = await axios.get(`${BASE_URL}/verify`, {
      token,
    });
    console.log(response.data)
    return(response)
  } catch (error) {
    console.log(error.message)
    return(error)
  }
};

export const gastos = async () => {
  const token = checkToken();
  try {
    const response = await axios.get(`${BASE_URL}/gastos`, {
      token,
      
    });
    return(response)
  } catch (error) {
    return(error)
  }
};

export const ingresarGasto = async (producto,descripcion,valor,tipo_de_gasto) => {
  const token = await checkToken(); 
  try {
    const response = await axios.post(`${BASE_URL}/gastos`, {
      producto: producto,
      descripcion: descripcion,
      valor: valor,
      tipo_de_gasto: tipo_de_gasto,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    console.log("Respuesta del servidor:", error.response.data);
    return error;
  }
};


export const Eliminar_gastos = async (id) => {
  const token = checkToken();
  try {
    const response = await axios.delete(`${BASE_URL}/gastos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const Obtener_gasto = async (id) => {
  const token = checkToken();
  try {
    const response = await axios.get(`${BASE_URL}/gastos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const Actualizar_gasto = async (id, updatedData) => {
  const token = checkToken();
  try {
    const response = await axios.put(`${BASE_URL}/gastos/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};


export const presupuestos = async () => {
  const token = checkToken();
  try {
    const response = await axios.get(`${BASE_URL}/presupuesto`, {
      token,
      
    });
    return(response)
  } catch (error) {
    return(error)
  }
};

export const ingresarPresupuesto = async (presupuesto) => {
  const token = await checkToken(); 
  try {
    const response = await axios.post(`${BASE_URL}/presupuesto`, {
      presupuesto:presupuesto
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    console.log("Respuesta del servidor:", error.response.data);
    return error;
  }
};


export const Eliminar_Presupuesto = async (id) => {
  const token = checkToken();
  try {
    const response = await axios.delete(`${BASE_URL}/presupuesto/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const Obtener_Presupuesto = async (id) => {
  const token = checkToken();
  try {
    const response = await axios.get(`${BASE_URL}/presupuesto/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const Actualizar_Presupuesto= async (id, updatedData) => {
  const token = checkToken();
  try {
    const response = await axios.put(`${BASE_URL}/presupuesto/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};

