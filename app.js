//aca llamaremos las paqueterias que vamos a utilizar
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productsRoutes = require('./routes/products.route');

//inicializar aplicacion
const app = express();

//!MIDDLEWARES
//los middleware es una funcion y siempre llevan .use
app.use(morgan('dev'));
app.use(express.json()); //este middlaware es para que el cliente me pueda enviar informacion en objeto json
app.use(cors());

app.use((req, res, next) => {
  req.requesTime = new Date();
  next();
});

//!ROUTES
app.use('/api/v1/products', productsRoutes);

//!EXPORTS
//voy a exportar app
module.exports = app;
