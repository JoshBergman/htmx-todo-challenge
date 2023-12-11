const { sessions } = require("../../store/sessions");

module.exports.renderTasks = (id) => {
  const getTaskHTML = (taskName, taskStatus) => {
    return `
      <div id="tasks" class="task-container ${taskStatus ? "completed" : ""}">

        <input id="completionbox" hx-trigger="change" hx-target="#tasks" hx-swap="outerHTML" hx-post="/api/complete-task" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'
         type="checkbox" ${
           taskStatus ? 'checked="true"' : ""
         } class="completed-box" 
         />

        <p>
          ${taskName}
        </p>

        <button>
          edit button
        </button>

        <button id="deltask" 
         hx-confirm="Are you sure you would like to remove the task: ${taskName}?"
         hx-target="#tasks" hx-swap="outerHTML" hx-post="/api/delete-task" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'>
          Delete button
        </button>

      </div>`;
  };
  const tasks = Object.keys(sessions[id].tasks);
  const tasksHTML = tasks.map((task) =>
    getTaskHTML(task, sessions[id].tasks[task])
  );

  return tasksHTML.join("\n");
};
