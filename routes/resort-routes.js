const router = require("express").Router();
const resortController = require("../controllers/resort-controller");


router.route("/")
	.get(resortController.getAllResortItems)

router.route('/:id')
    .get(resortController.getResortItemById)

module.exports = router;