const { sessions } = require("../../store/sessions");
const { renderAddTask } = require("./renderAddTask");

module.exports.toggleAddTaskController = (req, res) => {
  const id = req.body.sessid || "invalidID";

  sessions[id].isAdding = !sessions[id].isAdding;

  const tasks = renderAddTask(id);
  res.send(tasks);
};

module.exports.confirmAddTaskController = (req, res) => {
  const id = req.body.sessid;
  const newTaskName = req.body.addinput;

  sessions[id].isAdding = !sessions[id].isAdding;
  sessions[id].tasks[newTaskName] = { completed: false, isModifying: false };

  const tasks = renderAddTask(id);
  res.send(tasks);
};
