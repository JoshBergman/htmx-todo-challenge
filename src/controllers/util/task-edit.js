const { sessions } = require("../../store/sessions");
const { renderTasks } = require("./renderTasks");

module.exports.toggleEditTaskController = (req, res) => {
  const id = req.body.sessid || "invalidID";
  const taskToModify = req.body.task;

  sessions[id].tasks[taskToModify].isModifying =
    !sessions[id].tasks[taskToModify].isModifying;

  const tasks = renderTasks(id);
  res.send(tasks);
};

module.exports.confirmEditTaskController = (req, res) => {
  const id = req.body.sessid;
  const existingTaskName = req.body.task;
  const newTaskName = req.body[existingTaskName + "input"];

  //remove editing state
  sessions[id].tasks[existingTaskName].isModifying =
    !sessions[id].tasks[existingTaskName].isModifying;

  //transfer properties to new name then delete old task name
  const existingTaskProperties = sessions[id].tasks[existingTaskName];
  sessions[id].tasks[newTaskName] = existingTaskProperties;
  delete sessions[id].tasks[existingTaskName];

  const tasks = renderTasks(id);
  res.send(tasks);
};
