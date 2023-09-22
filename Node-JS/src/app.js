const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes/auth.routes.js');
const router2 = require('./routes/gastos.routes.js');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(cookieParser());

app.use('/api', router);

app.use('/api', router2);

module.exports = app;