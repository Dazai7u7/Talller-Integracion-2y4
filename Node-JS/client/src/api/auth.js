import axios from 'axios'

const API = 'http://localhost:3000'

export const registroRequest = usuario => axios.post(`${API}/api/registro`, usuario);
