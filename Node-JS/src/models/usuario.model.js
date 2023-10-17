const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({ //Datos que se guardaran en la base de datos
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('usuario', usuarioSchema); //exportacion de "objetos"
