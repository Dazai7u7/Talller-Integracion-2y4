const express = require('express');
const router = express.Router();
const autRequerida = require("../middlerware/validarToken.js");
const { registro, login, logout, profile } = require('../controllers/auth.controller');
const validarSchema = require('../middlerware/validar.middleware.js');
const { registroSchema, loginSchema } = require('../schemas/auth.schema.js');

router.post('/registro', validarSchema(registroSchema), registro);

router.post('/login', validarSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile', autRequerida, profile);

module.exports = router;