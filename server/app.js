const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
require('dotenv').config();
const request = require('supertest');
const app = express();
const port = process.env.PORT || 3000;

const mongoURL = process.env.MONGO_URI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB usando Mongoose
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB establecida correctamente');
  })
  .catch((err) => {
    console.error('Error de conexión a MongoDB:', err);
  });
// Función de prueba para el registro de usuario
async function pruebaRegistroUsuario() {
  try {
    const usuarioNuevo = {
      nombre: 'Usuario de Prueba',
      email: 'prueba@example.com',
      contraseña: 'contraseña123',
    };

    const respuesta = await request(app)
      .post('/api/usuarios/registro')
      .send(usuarioNuevo);

    // Verifica la respuesta y los resultados esperados
    if (respuesta.status === 201 && respuesta.body.mensaje === 'Usuario registrado con éxito') {
      console.log('Prueba de registro de usuario pasada con éxito');
    } else {
      console.error('Prueba de registro de usuario fallida');
    }
  } catch (error) {
    console.error('Error en la prueba de registro de usuario:', error);
  }
}
// Función de prueba para el inicio de sesión
async function pruebaInicioSesion() {
  try {
    const credenciales = {
      email: 'prueba@example.com',
      contraseña: 'contraseña123',
    };

    const respuesta = await request(app)
      .post('/api/usuarios/login')
      .send(credenciales);

    // Verifica la respuesta y los resultados esperados
    if (respuesta.status === 200 && respuesta.body.mensaje === 'Inicio de sesión exitoso') {
      console.log('Prueba de inicio de sesión pasada con éxito');
    } else {
      console.error('Prueba de inicio de sesión fallida');
    }
  } catch (error) {
    console.error('Error en la prueba de inicio de sesión:', error);
  }
}
// Usa las rutas de usuario
app.use('/api/usuarios', userRoutes);

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
