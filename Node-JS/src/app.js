const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./routes/auth.routes.js');
const router2 = require('./routes/gastos.routes.js');


const app = express(); //Importacion del modulo express

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(morgan('dev')); //Registro de solicitudes y/o respuestas

app.use(express.json()); //Analisis y proceso de datos JSON

app.use(cookieParser());


app.use('/api', router);
app.use('/api', router2);

module.exports = app;