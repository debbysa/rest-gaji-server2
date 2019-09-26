const express = require("express");
const router = express.Router();
const gajiController = require("../controllers/gajiController");

//route read
router.get("/gaji", gajiController.index);

router.get("/:id", gajiController.search);

module.exports = router;
