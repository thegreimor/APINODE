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

    const tags = req.query.tags;
    const precio = req.query.precio;
    const nombre = req.query.nombre;
    const venta = req.query.venta;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const fields = req.query.fields;
    const sort = req.query.sort;

    const filter = {};

    if (nombre) {
        filter.nombre = nombre;
    }

    if (venta) {
        filter.venta = venta;
    }

    if (tags) {
        filter.tags = tags;
      }


    if (typeof precio !== 'undefined') {
        if (precio[0] === '-') {
            filter.precio = {'$lte': Math.abs(parseInt(precio))};
        } else if (precio[precio.length - 1] === '-'){
            filter.precio = {'$gte': parseInt(precio)};
        } else if (precio.indexOf('-') > 0 && precio.indexOf('-') < precio.length - 1){
            let precio1 = precio.substring(0, precio.indexOf('-'));
            let precio2 = precio.substring(precio.indexOf('-') + 1 , precio.length);
            filter.precio = {'$gte': parseInt(precio1), '$lte': parseInt(precio2)};
        } else {
          filter.precio = precio;
      }
  }


  const anuncios = await Anuncio.list({filter: filter, skip, limit, fields, sort});

   res.json({ success: true, anuncios: anuncios });
   } catch (err) {
       next(err);
   }
});

 /**
  * GET /tags
  */

 router.get('/tags', async (req, res, next) => {
    try {
    const anuncios = await Anuncio.listTags();
    res.json({ success: true, results: anuncios });
    } catch (err) {
      next(err);
    }
  });


 /**
  * POST /anuncios
  */

  router.post('/', async (req, res, next) => {
     try {
        console.log(req.body);

        const data = req.body;

        const anuncio = new Anuncio(data);

        const anuncioGuardado = await anuncio.save();

        res.json({ success: true, result: anuncioGuardado});
    } catch (err) {
         next(err);
     }
  });

  /**
   * PUT /anuncios:id
   */

   router.put('/:id', async (req, res, next) => {
       try {
           const _id = req.params.id;
           const data = req.body;

           const anuncioGuardado = await Anuncio.findOneAndUpdate({_id: _id}, data, { new: true }).exec();
           res.json({ success: true, result: anuncioGuardado});

       } catch (err) {
           next(err);
       }
   });





module.exports = router;