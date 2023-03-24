const app = require('./app');
const { db } = require('./database/config');

//! LA AUTENTIFICACION CON BASE DE DATOS
db.authenticate()
  .then(() =>
    console.log('Database Authenticated :)')
  )
  .catch((error) => console.log(error));

//! SINCRONIZACION CON LA BASE DE DATOS
db.sync()
  .then(() => console.log('database Synced :O'))
  .catch((error) => console.log(error));

const port = 3002;
app.listen(port, () => {
  console.log(`app runing on port ${port}...`);
});
