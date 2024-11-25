const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const app = express();
const eventosRouter = require('./routes/eventos');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Configurar el middleware para analizar cuerpos de solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para el formulario de evento
app.use('/api', eventosRouter);

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
