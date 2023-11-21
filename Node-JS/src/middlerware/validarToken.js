const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require("../config.js");

const autRequerida = (req, res, next) => {
    try {
        const { token } = req.cookies; //Extracción de token de la cookie

        if (!token) //Verificación de la presencia del token
        return res
            .status(401)
            .json({ message: "No hay token" }); 

        jwt.verify(token, TOKEN_SECRET, (error, user) => { //Verificacion de la validez del token
            if (error) {
                return res.status(401).json({ message: "Token inválido" });
            }
            req.usuario = user; // Cambio a req.usuario
            next();
        });
    } catch (error) {
        return res.status(500).json({ message: error.message }); //Error en el servidor
    }
};

module.exports = autRequerida;