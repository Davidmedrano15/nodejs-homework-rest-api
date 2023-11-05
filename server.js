const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;
// Cadena de conexión a tu base de datos MongoDB
const dbURI = 'mongodb://localhost:27017/nombre-de-tu-base-de-datos';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    // Resto del código de tu aplicación
  })
  .catch((error) => console.error('Error de conexión a la base de datos:', error));
