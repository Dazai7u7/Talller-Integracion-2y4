const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    contraseña: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);