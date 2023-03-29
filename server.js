//haremos las importaciones
require('dotenv').config();
//app se debe pedir mediante la ruta que nos dio al crear el archivo
const app = require('./app');
const { db } = require('./database/config');

console.log(process.env.SALUDO);

//! LA AUTENTIFICACION CON BASE DE DATOS
db.authenticate()
  .then(() => console.log('Database Authenticated :)'))
  .catch((error) => console.log(error));

//! SINCRONIZACION CON LA BASE DE DATOS
db.sync() //  force:true con esto estamos forzando la sincronizacion para que los campos que no se crearon se vea en la db
  //!no se debe hacer en produccion puede borrar la bd
  .then(() => console.log('database Synced :O'))
  .catch((error) => console.log(error));

const port = process.env.PORT; //esta es la peticion de la variable de entorno para tener seguridad y eviatar hackeos
app.listen(port, () => {
  console.log(`app runing on port ${port}...`);
});
