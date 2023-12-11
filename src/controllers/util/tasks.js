const { sessions } = require("../../store/sessions");
const { renderTasks } = require("./renderTasks");

module.exports.getTasksController = (req, res) => {
  const id = req.body.sessid || "invalidID";
  const tasks = renderTasks(id);

  res.send(tasks);
};

module.exports.checkTaskController = (req, res) => {
  const id = req.body.sessid || "invalidID";
  const taskChecked = req.body.task;

  sessions[id].tasks[taskChecked].completed =
    !sessions[id].tasks[taskChecked].completed;

  const tasks = renderTasks(id);
  res.send(tasks);
};

module.exports.deleteTaskController = (req, res) => {
  const id = req.body.sessid || "invalidID";
  const taskToDelete = req.body.task;

  delete sessions[id].tasks[taskToDelete];

  const tasks = renderTasks(id);
  res.send(tasks);
};
