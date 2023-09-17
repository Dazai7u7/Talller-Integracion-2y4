const express = require('express');
const usuarioSchema = require('../models/usuario.js');

const router = express.Router();

// Ruta crear usuario
router.post('/usuarios', (req, res) => {
    const usuario = usuarioSchema(req.body);
    usuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;