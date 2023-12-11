const { sessions } = require("../../store/sessions");

module.exports.renderAddTask = (id) => {
  const getAddTaskHTML = (id, isAdding = false) => {
    return isAdding
      ? `
        <form class="addTaskContainer" id="add" hx-swap="outerHTML" hx-post="/api/confirm-add" 
         hx-include='[name="addinput"]'
         hx-vals='${JSON.stringify({ sessid: id })}'
         >
            <input class="textInput" name="addinput" placeholder="Task Name" />
            <button class="actionButton" type="submit">
            Add Task
            </button> 
            <button class="actionButton" type="button" hx-target="#add" hx-swap="outerHTML" hx-post="/api/toggle-add" 
             hx-vals='${JSON.stringify({ sessid: id })}'
             >
                Cancel
            </button>
        </form>
        `
      : `
        <div class="addTaskContainer" id="add" hx-target="#tasks" hx-swap="innerHTML" hx-trigger="load" hx-post="/api/get-tasks" 
         hx-vals='${JSON.stringify({ sessid: id })}'
         >
            <button class="actionButton" type="button" hx-target="#add" hx-swap="outerHTML" hx-post="/api/toggle-add" 
            hx-vals='${JSON.stringify({ sessid: id })}'
            >
                Add Task
            </button>
        </div>
        `;
  };

  const isAdding = sessions[id].isAdding;
  return getAddTaskHTML(id, isAdding);
};
