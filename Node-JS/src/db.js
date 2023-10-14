const mongoose = require('mongoose');

const mongodb = async () => {

    mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log('Conectado a la base de datos'))
        .catch(() => console.log('error'));

}

module.exports = mongodb;
