const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    gmail: String,
    contraseña: String
})

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario; 
