const router = require("express").Router();
const resortController = require("../controllers/resort-controller");

// Route for getting all resorts
router.route("/")
	.get(resortController.getAllResortItems)

// Route for getting a single resort by ID
router.route('/:id')
    .get(resortController.getOneResort)

// Route for getting weather info by resort ID
router.get('/:id/weather', resortController.getResortAndWeather);

module.exports = router;