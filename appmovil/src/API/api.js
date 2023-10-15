// src/API/api.js
import axios from 'axios';
import {checkToken} from './token.js'
const BASE_URL = 'http://192.168.1.59:3000/api';

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
    return(error)
  }
};