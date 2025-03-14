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

// Obtener por ID

const getCountryByIdCountry = (req, res) => {
    const countryID  = req.params.id;
    db.get('SELECT * FROM country WHERE countryID = ?', [countryID], (err, row) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            return res.json({country: row});
        }
    })
}

const getIDByIdPlace = (req, res) => {
    const placeID  = req.params.id;
    db.get('SELECT * FROM places WHERE placeID = ?', [placeID], (err, row) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            return res.json({place: row});
        }
    })
}


const getIDByIdRestaurant = (req, res) => {
    const restaurantID  = req.params.id;
    db.get('SELECT * FROM country WHERE restaurantID = ?', [restaurantID], (err, row) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            return res.json({Restaurant: row});
        }
    })
}

const getIDByIdHotels = (req, res) => {
    const hotelID  = req.params.id;
    db.get('SELECT * FROM country WHERE hotelID = ?', [hotelID], (err, row) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            return res.json({Hotel: row});
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

module.exports = {getAllCountries, getAllHotels, getAllRestaurants, getAllPlaces, getCountryByIdCountry, getIDByIdPlace, getIDByIdRestaurant, getIDByIdHotels};