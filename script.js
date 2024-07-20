let taskForm = document.getElementById("todo-form");
let list = document.getElementById("todo-list");
let newTaskInput = document.getElementById("new-task");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let toDoTask = newTaskInput.value;

  if (toDoTask) {
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    let liElement = document.createElement("li");
    liElement.textContent = toDoTask;
    list.appendChild(liElement);
    list.appendChild(doneBtn);
    newTaskInput.value = "";

    doneBtn.addEventListener("click", () => {
      liElement.remove();
      doneBtn.remove();
    });
  }
});
