const { sessions } = require("../../store/sessions");

module.exports.renderTasks = (id) => {
  const getTaskHTML = (taskName, taskStatus, isModifying) => {
    return isModifying
      ? `
    <form class="task-container" hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/confirm-edit" 
     hx-include='[name="${taskName}input"]'
     hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'
     >
     <input class="textInput addinput" name="${taskName}input" placeholder="${taskName}" />
     <div class="sub-task">
        <button class="actionButton manageButton" type="submit">Confirm</button>
        <button class="actionButton manageButton" type="button" hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/toggle-edit" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'
         >
            Cancel
        </button>
        </div> 
    </form>
    `
      : ` 
      <div class="task-container ${taskStatus ? "completed" : ""}">

        <div class="sub-task">
        <input id="${taskName}box" hx-trigger="change" hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/complete-task" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'
         type="checkbox" ${
           taskStatus ? 'checked="true"' : ""
         } class="completed-box" 
         />

         <p>
           ${taskName}
         </p>
        </div>
        <div class="sub-task">
         <button class="actionButton manageButton" type="button" hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/toggle-edit" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'
         >
            Edit
        </button>

        <button class="actionButton manageButton" id="deltask" 
         hx-confirm="Are you sure you would like to remove the task: ${taskName}?"
         hx-target="#tasks" hx-swap="innerHTML" hx-post="/api/delete-task" 
         hx-vals='${JSON.stringify({ sessid: id, task: taskName })}'>
          Delete
        </button>
        </div>
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
