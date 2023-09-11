//Conexion a base de datos
const mongoose = require('mongoose');

const user = 'Prueba';
const password = 't5Ifp4EhMSmAExig';
const uri = 'mongodb+srv://${user}:${password}@pagina.gk1ypok.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('Base de datos coenctada'))
    .catch(e => console.log(e))