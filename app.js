//solicitamos express que es la libreria con la que vamos a trabajar
const express = require('express');
const morgan = require('morgan');

const productsRoutes = require('./routes/products.route');

//iniciamos la aplicacion en la variable app
const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('hello from de middleware');
  next();
});

//CREAR UN MIDDLEWARE
app.use((req, res, next) => {
  req.requesTime = new Date();
  next();
});
// A ESE MIDDLEWARE VAN A ADJUNTARLE ALOBJETO REQ UNA PROPIEDAD LLAMADA
//REQUESTIME Y LE AGREGARAN LA FECHA ACTUAL CON NEW DATE()
// FINDALLPRODUCTS VANA DESESTRUCTURAR DE LA REQ LA PROPIEDAD REQUESTIME
//ENVIAR POR RES

//creamos una ruta del servidor

//app.get('/api/v1/products',findAllProducts) ;
//app.post('/api/v1/products',createProduct);

//app.get("/api/v1/products/:id", findOneProduct);
//app.patch("/api/v1/products/id", updateProduct );
//app.delete("/api/v1/products/:id", deleteProduct );

//!ROUTES
app.use('/api/v1/products', productsRoutes);

//crear nueva destructuracion de objeto
// const obj = {
//   prop1: 'propiedad 1',
//   prop2: 'propiedad 2',
//   prop3: 'propiedad 3',
// };

//agregar una nueva propiedad
// obj.prop4 = 'propiedad 4';

//desestructurar una propiedad
// const { prop2 } = obj;

// console.log(prop2);

//colocar a la aplicacion a escuchar por el puerto 3000

//!EXPORTS
module.exports = app;
