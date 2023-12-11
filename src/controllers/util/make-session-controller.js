const { sessions } = require("../../store/sessions");

const getInitialTasksHTML = (id) => {
  const html = `
    <div hx-trigger="load" hx-post="/api/get-tasks" 
    hx-vals='${JSON.stringify({ sessid: id })}'
    id="tasks" class="tasks-conatiner"></div>
        `;
  return html;
};

module.exports.createSessionController = (req, res) => {
  const nextSessionID = Object.keys(sessions).length;
  sessions[nextSessionID] = {
    tasks: { defaultTask: { completed: true, isModifying: false } },
  };
  res.send(getInitialTasksHTML(nextSessionID));
};
