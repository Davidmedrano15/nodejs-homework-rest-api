<<<<<<< HEAD
const app = require("./app");

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});
=======
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
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4
