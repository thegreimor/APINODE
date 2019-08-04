'use strict';

// cargar libreria

const mongoose = require('mongoose');
const conn = mongoose.connection;

// gestionar eventos de conexion

conn.on('error', err => {
    console.log('Error de conexion', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Conectado a MongoDB en', mongoose.connection.name);
});

// conectar

mongoose.connect('mongodb://localhost/cursonode', { useNewUrlParser: true });

// exportar la conexion (opcional)

module.exports = conn;