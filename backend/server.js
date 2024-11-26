const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Ruta de ejemplo
app.get('/api/eventos', (req, res) => {
    res.json([{ id: 1, nombre: 'Evento Deportivo', fecha: '2023-12-01', lugar: 'Estadio XYZ' }]);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
