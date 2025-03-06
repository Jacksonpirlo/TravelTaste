const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path'); // Importa el módulo 'path'

const app = express();

app.use(cors());
app.use(express.json());

// Usa __dirname para una ruta relativa más segura
const dbPath = path.join(__dirname, 'db', 'traveltaste.db');

let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err.message);
        // Importante: En una aplicación real, podrías querer manejar este error
        // de forma más elegante (por ejemplo, cerrando el servidor o mostrando un mensaje de error).
        return; // Detiene la ejecución si la conexión falla
    } else {
        console.log('Conectado a la base de datos SQLite.');
        // Ahora puedes ejecutar consultas SQL
        // db.run('SELECT * FROM users', (err) => {
        //     if (err) {
        //         console.error("Error al crear la tabla 'users':", err.message);
        //     } else {
        //         console.log("Tabla 'users' creada o ya existente.");
        //     }
        // });
        console.log('Todo bien')
    }
});

app.get('/api/users', (req, res) => {
    if (!db) { // Verifica si la conexión a la base de datos se estableció
        return res.status(500).json({ error: "No hay conexión a la base de datos" });
    }
    db.all('SELECT hotelName FROM hotels', (err, rows) => {
        if (err) {
            console.error("Error al obtener los usuarios:", err.message);
            return res.status(500).json({ error: err.message });
        }
        return res.json({ users: rows });
    });
});
app.listen(3009, () => {
    console.log('Server is running on port 3009');
});