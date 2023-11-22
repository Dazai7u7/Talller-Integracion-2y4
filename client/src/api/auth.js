import axios from "./axios.js";
import { useAuth } from '../context/AuthContext';


export const registroRequest = usuario => axios.post('/registro', usuario);

export const loginRequest = usuario => axios.post('/login', usuario);

export const verifyTokenRequest = (token= useAuth()) => axios.get('/verify', { headers: {"Authorization" : `Bearer ${token}`} });

export const profileRequest = usuario => axios.get('/profile')