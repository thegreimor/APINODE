'use strict';

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

/**
 * GET /anuncios
 * Devuelve una lista de anuncios
 */

router.get('/', async (req, res, next) => {
   try{

    const limit = parseInt(req.query.limit);

  const anuncios = await Anuncio.find().limit(limit).exec();
   res.json({ success: true, anuncios: anuncios });
   } catch (err) {
       next(err);
   }
});

/**
 * GET /anuncios:id
 *  Obtiene un agente
 */



module.exports = router;