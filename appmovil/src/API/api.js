// src/API/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const registrarUsuario = async (nombre, email, contraseña) => {
  try {
    const response = await axios.post(`${BASE_URL}/usuarios/registro`, {
      nombre,
      email,
      contraseña,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const iniciarSesion = async (email, contraseña) => {
  try {
    const response = await axios.post(`${BASE_URL}/usuarios/login`, {
      email,
      contraseña,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
