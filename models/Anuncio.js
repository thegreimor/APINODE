'use strict';

const mongoose = require('mongoose');

// definimos un esquema
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    photo: String,
    precio: Number,
    tags: Array

});

anuncioSchema.statics.list = function({filter, skip, limit, fields, sort}) {
    const query = Anuncio.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec();
}

anuncioSchema.statics.listTags = function() {
    const query = Anuncio.distinct('tags') ;
      return query.exec();
  };

// creamos el modelo de anuncio

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;