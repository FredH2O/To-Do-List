let taskForm = document.getElementById("todo-form");
let list = document.getElementById("todo-list");
let newTaskInput = document.getElementById("new-task");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let toDoTask = newTaskInput.value.trim();

  if (toDoTask) {
    toDoTask = toDoTask.charAt(0).toUpperCase() + toDoTask.slice(1);

    let removeBtn = document.createElement("button");
    let liElement = document.createElement("li");
    let taskContainer = document.createElement("div");

    removeBtn.classList.add("removeBtn");
    taskContainer.classList.add("task-container");

    taskContainer.appendChild(liElement);
    taskContainer.appendChild(removeBtn);
    list.appendChild(taskContainer);

    removeBtn.textContent = "Remove";
    liElement.textContent = toDoTask;

    newTaskInput.value = "";

    removeBtn.addEventListener("click", () => {
      taskContainer.remove();
    });
  }
});
