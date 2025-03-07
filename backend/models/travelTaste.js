const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbFile = path.join(__dirname, '..', 'db', 'traveltaste.db'); // Ruta corregida

console.log("Ruta de la base de datos:", dbFile); // Imprime la ruta para verificar

const db = new sqlite3.Database(dbFile, (err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err);
    } else {
        console.log('Conectado a la base de datos SQLite...');
        console.log('Conectado')
    }
});

module.exports = db;