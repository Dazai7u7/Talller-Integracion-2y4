const express = require('express');
const mongoose = require('mongoose');
const usuarioRutas = require('./routes/usuario');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use('/api', usuarioRutas);

// Routes
app.get('/', (req, res) => {
    res.send('bienvenido');
});

// MongoDB connection
mongoose
    .connect('mongodb+srv://prueba:8FcBZdCwdTk9EZMD@pagina.gk1ypok.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(() => console.log('error'));

app.listen(port, () => console.log('server listening on port', port));