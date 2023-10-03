const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require('../config.js');

const autRequerida = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ 
        message: "No se encontró el token, autorización denegada" 
    });

    jwt.verify(token, TOKEN_SECRET, (err, usuario) => {
        if (err) {
            console.error(err);
            return res.status(403).json({ message: "Token inválido", error: err.message });
        }
        req.usuario = usuario;
        next();
    });
};

module.exports = autRequerida;