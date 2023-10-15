const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../config.js'); // Asegúrate de que la ruta sea correcta

// Función para crear un token de acceso
const crearTokenAcceso = (datosUsuario) => {
  return jwt.sign(datosUsuario, TOKEN_SECRET, { expiresIn: '1h' });
};

module.exports = { crearTokenAcceso };