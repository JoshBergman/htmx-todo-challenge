const express = require("express");
const router = express.Router();
const { testController } = require("../controllers/util/test-controller");

router.get("/", testController);

module.exports = router;