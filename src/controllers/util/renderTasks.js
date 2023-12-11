const { sessions } = require("../../store/sessions");

module.exports.renderTasks = (id) => {
  const getTaskHTML = (taskName, taskStatus, isModifying) => {
    return isModifying
      ? `
    <form class="task-conatiner" hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/confirm-edit" 
     hx-include='[name="${taskName}input"]'
     hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'
     >
        <input name="${taskName}input" placeholder="${taskName}" />
        <button type="button" hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/toggle-edit" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'
         >
            Cancel
        </button>
        <button type="submit">Confirm</button>
    </form>
    `
      : ` 
      <div class="task-container ${taskStatus ? "completed" : ""}">

        <input id="completionbox" hx-trigger="change" hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/complete-task" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'
         type="checkbox" ${
           taskStatus ? 'checked="true"' : ""
         } class="completed-box" 
         />

         <p>
           ${taskName}
         </p>

         <button type="button" hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/toggle-edit" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'
         >
            Edit
        </button>

        <button id="deltask" 
         hx-confirm="Are you sure you would like to remove the task: ${taskName}?"
         hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/delete-task" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'>
          Delete button
        </button>

      </div>`;
  };
  const tasks = Object.keys(sessions[id].tasks);
  const tasksHTML = tasks.map((task) =>
    getTaskHTML(
      task,
      sessions[id].tasks[task].completed,
      sessions[id].tasks[task].isModifying
    )
  );

  return tasksHTML.join("\n");
};
