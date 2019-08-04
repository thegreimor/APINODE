# APINODE - NODEPOP

## Requerimientos

* MongoDB (./bin/mongod --dbpath ./data/db --directoryperdb)

## Lista de anuncios en JSON mediante API

http://localhost:3000/apiv1/anuncios

## Lista de anuncios version HTML

http://localhost:3000/

## Formatos de busqueda GET desde la API

- skip: para paginacion
    Ej: anuncios?skip=5

- precio: para buscar un precio.
    Ej: anuncios?precio=300

- precio: para buscar en un rango de precio.
    Ej: anuncios?precio=300-2000

- Filtros: para buscar datos concretos.
    Ej: anuncios?nombre=Audio
    Ej2: anuncios?venta=false (o true)
    Ej3: anuncios?tags=motor

