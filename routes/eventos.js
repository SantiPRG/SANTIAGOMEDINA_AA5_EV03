const express = require('express');
const router = express.Router();
const pool = require('../db');

// Insertar un evento deportivo
router.post('/evento', async (req, res) => {
    const { nombre, fecha, lugar } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO eventos (nombre, fecha, lugar) VALUES ($1, $2, $3) RETURNING *',
            [nombre, fecha, lugar]
        );
        res.render('resultado', { nombre, fecha, lugar });
    } catch (err) {
        console.error(err.message);
    }
});

// Consultar un evento deportivo
router.get('/evento', (req, res) => {
    res.render('evento');
});

module.exports = router;
