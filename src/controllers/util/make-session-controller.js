const { sessions } = require("../../store/sessions");
const { renderAddTask } = require("./renderAddTask");

const getInitialTasksHTML = (id) => {
  const html = `
    <div hx-trigger="load" hx-post="/api/get-tasks" 
     hx-vals='${JSON.stringify({ sessid: id })}'
    id="tasks" class="tasks-container">
    </div>
    ${renderAddTask(id)}
        `;
  return html;
};

module.exports.createSessionController = (req, res) => {
  const nextSessionID = Object.keys(sessions).length;
  sessions[nextSessionID] = {
    tasks: { "Default Task": { completed: true, isModifying: false } },
    isAdding: false,
  };
  res.send(getInitialTasksHTML(nextSessionID));
};
