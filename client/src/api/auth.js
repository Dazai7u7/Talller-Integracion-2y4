import axios from "./axios.js";

export const registroRequest = usuario => axios.post('/registro', usuario);

export const loginRequest = usuario => axios.post('/login', usuario);

export const verifyTokenRequest = (token) => axios.get('/verify', token);
