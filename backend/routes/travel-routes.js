const express = require('express');
const router = express.Router();
const travelTasteController = require('../controllers/travelTastes-controller.js');

router.get('/countries', travelTasteController.getAllCountries);
router.get('/hotels', travelTasteController.getAllHotels);
router.get('/restaurants', travelTasteController.getAllRestaurants);
router.get('/places', travelTasteController.getAllPlaces);

module.exports = router;