const db = require ('../models/travelTaste');

// Obtener todos los paises

const getAllCountries = (req, res) => {
    db.all('SELECT * FROM country', (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            
            return res.json({countries: rows});
        }
    })
}

// Obtener todos los hoteles

const getAllHotels = (req, res) => {
    db.all('SELECT * FROM hotels', (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            return res.json({hotels: rows});
        }
    })
}

// Obtener todos los restaurantes

const getAllRestaurants = (req, res) => {
    db.all('SELECT * FROM restaurants', (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            return res.json({restaurants: rows});
        }
    })
}

// Obtener todos los lugares

const getAllPlaces = (req, res) => {
    db.all('SELECT * FROM places', (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            return res.json({places: rows});
        }
    })
}

module.exports = {getAllCountries, getAllHotels, getAllRestaurants, getAllPlaces};