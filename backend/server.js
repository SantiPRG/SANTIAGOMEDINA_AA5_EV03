const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db'); // Añadimos la conexión a la base de datos
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Ruta para obtener todos los eventos
app.get('/api/eventos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM eventos');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para añadir un nuevo evento
app.post('/api/eventos', async (req, res) => {
    const { nombre, fecha, lugar } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO eventos (nombre, fecha, lugar) VALUES ($1, $2, $3) RETURNING *',
            [nombre, fecha, lugar]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
