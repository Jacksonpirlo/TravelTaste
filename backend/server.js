const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path'); // Importa el módulo 'path'
const travelRoutes = require('./routes/travel-routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas

app.use('/', travelRoutes);
// app.get('/', (req, res) => { res.send('Hello World!') });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});