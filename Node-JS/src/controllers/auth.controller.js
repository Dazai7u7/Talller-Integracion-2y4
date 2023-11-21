const usuario = require('../models/usuario.model.js');
const bcrypt = require('bcryptjs');
const { crearTokenAcceso } = require('../libs/jwt.js'); // Cambio en la importación
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require('../config.js');


//Register

const registro = async (req, res) => {
    const { nombre, email, password } = req.body; //Extracción de datos

    try {

        const userFound = await usuario.findOne({ email }); //busqueda de usuario por correo

        //verificacion de correo
        if (userFound) {
            return res.status(400).json({ message: ["El correo ya está en uso"] });
        }

        const passwordHash = await bcrypt.hash(password, 10); //encriptacion de contraseña

        const nuevoUsuario = new usuario({ //creacion de objeto usuario
            nombre,
            email,
            password: passwordHash,
        });

        const token = crearTokenAcceso({ id: nuevoUsuario._id }); //token de acceso para el usuario

        await nuevoUsuario.save(); //guardado de objeto usuario

        //creacion de cookie para mantener la informacion del usuario
        res.cookie("token", token);
        
        res.json(formatUserData(nuevoUsuario)); //Envio de datos formateados del nuevo usuario al cliente
    } catch (error) {
        handleRegistrationError(res, error);
    }
};

//Login

const login = async (req, res) => {
    const { email, password } = req.body; //extraccion de datos

    try {

        //Busqueda de usuario por correo
        const usuarioEncontrado = await usuario.findOne({ email });
        if (!usuarioEncontrado) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        //Comparacion de contraseña
        const contrasenaValida = await bcrypt.compare(password, usuarioEncontrado.password);
        if (!contrasenaValida) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        const token = crearTokenAcceso({ id: usuarioEncontrado._id }); //creacion de token

        res.cookie("token", token); //token para la mantension de sesion del usuario

        res.json(formatUserData(usuarioEncontrado)); //Respuesta con datos formateados del usuario

    } catch (error) {
        handleLoginError(res, error);
    }
};

//Logout

const logout = (req, res) => {
    res.cookie("token", "", { //establecimiento de nueva cookie con valor vacio
        expires: new Date(0) //Fecha de expiracion
    });
    res.sendStatus(200); //Indicacion del cierre de sesión
};


const profile = async (req, res) => {
    try {
        const usuarioEncontrado = await usuario.findById(req.usuario.id);

        if (!usuarioEncontrado) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        res.json(formatUserData(usuarioEncontrado));
    } catch (error) {
        handleProfileError(res, error);
    }
};

// Función para dar formato a los datos del usuario
const formatUserData = (user) => ({
    id: user._id,
    nombre: user.nombre,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
});

// Función para manejar errores de registro
const handleRegistrationError = (res, error) => {
    console.error('Error en registro:', error);
    res.status(500).json({ message: error.message });
};

// Función para manejar errores de inicio de sesión
const handleLoginError = (res, error) => {
    console.error('Error en el proceso de inicio de sesión:', error);
    res.status(500).json({ message: "Error en el proceso de inicio de sesión" });
};

// Función para manejar errores de obtención de perfil
const handleProfileError = (res, error) => {
    console.error('Error al obtener el perfil del usuario:', error);
    res.status(500).json({ message: "Error al obtener el perfil del usuario" });
};

const verifyToken = async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: "No autorizado" });

    jwt.verify(token, TOKEN_SECRET, async (err, decodedUsuario) => {
        if (err) return res.status(401).json({ message: "No autorizado" });
    
        const usuarioEncontrado = await usuario.findById(decodedUsuario._id);
        if (!usuarioEncontrado) return res.status(401).json({ message: "No autorizado" });
    
        return res.json({
            id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            email: usuarioEncontrado.email,
        });
    });
};

module.exports = {
    registro,
    login,
    logout,
    profile,
    verifyToken
};