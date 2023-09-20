const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para el registro de un nuevo usuario
router.post('/registro', userController.registrarUsuario);

// Ruta para el inicio de sesión
router.post('/login', userController.iniciarSesion);

module.exports = router;
