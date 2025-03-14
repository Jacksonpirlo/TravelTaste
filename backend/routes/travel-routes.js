const express = require('express');
const router = express.Router();
const travelTasteController = require('../controllers/travelTastes-controller.js');

router.get('/countries', travelTasteController.getAllCountries);
router.get('/hotels', travelTasteController.getAllHotels);
router.get('/restaurants', travelTasteController.getAllRestaurants);
router.get('/places', travelTasteController.getAllPlaces);
router.get('/countries/:id', travelTasteController.getCountryByIdCountry);
router.get('/places/:id', travelTasteController.getIDByIdPlace);
router.get('/restaurants/:id', travelTasteController.getIDByIdRestaurant);
router.get('/hotels/:id', travelTasteController.getIDByIdHotels);

module.exports = router;