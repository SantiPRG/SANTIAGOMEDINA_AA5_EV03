const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const app = express();
const port = 5001;

app.use(bodyParser.json());

// Ruta de registro de usuario
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Verificar si el usuario ya existe
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (user.rows.length > 0) {
            return res.status(400).send('Usuario ya existe');
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insertar el nuevo usuario en la base de datos
        const newUser = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, hashedPassword]
        );

        res.status(201).send('Usuario registrado satisfactoriamente');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta de inicio de sesión de usuario
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Verificar si el usuario existe
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (user.rows.length === 0) {
            return res.status(400).send('Usuario no encontrado');
        }

        // Verificar la contraseña
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(400).send('Contraseña incorrecta');
        }

        // Crear y enviar el token JWT
        const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

app.listen(port, () => {
    console.log(`Servidor de autenticación corriendo en http://localhost:${port}`);
});
