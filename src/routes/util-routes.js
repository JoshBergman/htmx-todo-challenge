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
const {
  toggleEditTaskController,
  confirmEditTaskController,
} = require("../controllers/util/task-edit");
const {
  toggleAddTaskController,
  getAddTaskController,
  confirmAddTaskController,
} = require("../controllers/util/add-task");

router.get("/get-session", createSessionController);

router.post("/get-tasks", getTasksController);

router.post("/complete-task", checkTaskController);

router.post("/delete-task", deleteTaskController);

router.post("/toggle-edit", toggleEditTaskController);

router.post("/confirm-edit", confirmEditTaskController);

router.post("/toggle-add", toggleAddTaskController);

router.post("/confirm-add", confirmAddTaskController);

module.exports = router;
