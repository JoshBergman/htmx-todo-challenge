const express = require("express");
const router = express.Router();

const {
  createSessionController,
} = require("../controllers/util/make-session-controller");

const {
  getTasksController,
  checkTaskController,
  deleteTaskController,
} = require("../controllers/util/tasks");

router.get("/get-session", createSessionController);

router.post("/get-tasks", getTasksController);

router.post("/complete-task", checkTaskController);

router.post("/delete-task", deleteTaskController);

module.exports = router;
