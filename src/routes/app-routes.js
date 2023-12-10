const express = require("express");
const router = express.Router();
const { appController } = require("../controllers/app/app-controller");

router.get("/", appController);

module.exports = router;
