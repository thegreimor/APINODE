# APINODE

## Requirements

* MongoDB (./bin/mongod --dbpath ./data/db --directoryperdb)

## API Methods

## Agents list

http://localhost:3000/apiv1/agentes


# BD Mongo commands
***Motor***
db.anuncios.insert({ nombre: 'Tesla', venta: true, photo: 'tesla.jpg', precio: 22500, tags: [ 'motor']})
***Mobile***
db.anuncios.insert({ nombre: 'Xiaomi', venta: true, photo: 'xiaomi.jpg', precio: 150, tags: [ 'mobile']})