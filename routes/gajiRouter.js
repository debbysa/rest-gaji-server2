const express = require("express");
const router = express.Router();
const gajiController = require("../controllers/gajiController");

//route read
router.get("/gaji", gajiController.index);

router.get("/:id", gajiController.search);

router.post("/:id", gajiController.store);

router.put("/:id", gajiController.update);

router.delete("/:id", gajiController.destroy);

module.exports = router;
