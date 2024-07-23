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
    let checkBox = document.createElement("input");

    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("check-box");

    removeBtn.classList.add("remove-btn");
    taskContainer.classList.add("task-container");

    taskContainer.appendChild(checkBox);
    taskContainer.appendChild(liElement);
    taskContainer.appendChild(removeBtn);
    list.appendChild(taskContainer);

    removeBtn.textContent = "x";
    liElement.textContent = toDoTask;

    newTaskInput.value = "";

    removeBtn.addEventListener("click", () => {
      taskContainer.remove();
    });

    liElement.addEventListener("click", function () {
      liElement.classList.add("zoomed-in");
      liElement.classList.remove("zoomed-out");
      liElement.setAttribute("contenteditable", "true");
      liElement.focus();
      liElement.style.borderBottom = "none";

      liElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          liElement.classList.remove("zoomed-in");
          liElement.classList.add("zoomed-out");
          liElement.removeAttribute("contenteditable");
          liElement.style.borderBottom = "1px solid black";
        }
      });

      liElement.addEventListener("blur", function () {
        liElement.classList.remove("zoomed-in");
        liElement.classList.add("zoomed-out");
        liElement.removeAttribute("contenteditable");
        liElement.style.borderBottom = "1px solid black";
      });
    });

    checkBox.addEventListener("change", function () {
      if (checkBox.checked) {
        liElement.style.textDecoration = "line-through";
      } else {
        liElement.style.textDecoration = "none";
      }
    });
  }
});
