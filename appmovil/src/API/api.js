// src/API/api.js
import axios from 'axios';

const BASE_URL = 'http://192.168.1.54:3000/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const registrarUsuario = async (nombre, email, contraseña) => {
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