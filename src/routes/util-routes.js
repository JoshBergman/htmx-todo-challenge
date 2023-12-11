const express = require("express");
const router = express.Router();
const { testController } = require("../controllers/util/test-controller");
const {
  createSessionIDController,
} = require("../controllers/util/make-sessionID-controller");

router.get("/", testController);

router.get("/get-session", createSessionIDController);

module.exports = router;
