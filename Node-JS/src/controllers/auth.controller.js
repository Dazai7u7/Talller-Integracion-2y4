const usuario = require('../models/usuario.model.js');
const bcrypt = require('bcryptjs');
const crearTokenacceso = require('../libs/jwt.js');

const registro = (req, res) => {
    const { nombre, email, password } = req.body;

    bcrypt
        .hash(password, 10)
        .then((passwordHash) => {
            const nuevoUsuario = new usuario({
                nombre,
                email,
                password: passwordHash,
            });

            const token = crearTokenacceso({ id: nuevoUsuario._id });

        nuevoUsuario
            .save()
            .then(() => {
                res.cookie("token", token);
                res.json({
                    message: "Usuario creado exitosamente",
                    id: nuevoUsuario._id,
                    nombre: nuevoUsuario.nombre,
                    email: nuevoUsuario.email,
                    createdAt: nuevoUsuario.createdAt, 
                    updateAt: nuevoUsuario.updatedAt
                });
            })
            .catch(() => {
                res.status(500).json({ message: error.message });
            });
        });
};

const login = (req, res) => {
    const { email, password } = req.body;

    // Buscar al usuario por su correo electrónico
    usuario.findOne({ email })
        .then((usuarioEncontrado) => {
            if (!usuarioEncontrado) {
                return res.status(400).json({ message: "Usuario no encontrado" });
            }

            // Comparar la contraseña proporcionada con la contraseña almacenada
            bcrypt.compare(password, usuarioEncontrado.password)
                .then((contrasenaValida) => {
                    if (!contrasenaValida) {
                        return res.status(400).json({ message: "Contraseña incorrecta" });
                    }

                    // Crear un token de acceso para el usuario autenticado
                    crearTokenacceso({ id: usuarioEncontrado._id })
                        .then((token) => {
                            // Establecer el token como una cookie y responder con los datos del usuario
                            res.cookie("token", token);
                            res.json({
                                message: "Usuario autenticado exitosamente",
                                id: usuarioEncontrado._id,
                                nombre: usuarioEncontrado.nombre,
                                email: usuarioEncontrado.email,
                                createdAt: usuarioEncontrado.createdAt,
                                updatedAt: usuarioEncontrado.updatedAt
                            });
                        })
                        .catch((error) => {
                            console.error('Error al crear el token', error);
                            res.status(500).json({ message: "Error al crear el token" });
                        });
                })
                .catch((error) => {
                    console.error('Error al comparar contraseñas', error);
                    res.status(500).json({ message: "Error al comparar contraseñas" });
                });
        })
        .catch((error) => {
            console.error('Error en el proceso de inicio de sesión', error);
            res.status(500).json({ message: "Error en el proceso de inicio de sesión" });
        });
};

const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200);
};

const profile = async (req, res) => {
    const usuarioEncontrado = await usuario.findById(req.usuario.id)

    if (!usuarioEncontrado) return res.status(400).json({ message: "Usuario no encontrado"});

    return res.json({
        id: usuarioEncontrado._id,
        nombre: usuarioEncontrado.nombre,
        email: usuarioEncontrado.email,
        createdAt: usuarioEncontrado.createdAt,
        updatedAt: usuarioEncontrado.updatedAt
    });
};

module.exports = {
    registro,
    login,
    logout,
    profile
};