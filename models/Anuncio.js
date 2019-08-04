'use strict';

const mongoose = require('mongoose');

// definimos un esquema
const anuncioSchema = mongoose.Schema({
    name: String,
    age: Number,

});

// creamos el modelo de anuncio

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;