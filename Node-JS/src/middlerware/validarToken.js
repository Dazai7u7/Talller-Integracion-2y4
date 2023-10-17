const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require("../config.js");

const autRequerida = (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token)
        return res
            .status(401)
            .json({ message: "No hay token" });

        jwt.verify(token, TOKEN_SECRET, (error, user) => {
            if (error) {
                return res.status(401).json({ message: "Token inválido" });
            }
            req.user = user;
            next();
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = autRequerida;