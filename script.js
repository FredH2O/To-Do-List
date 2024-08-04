let taskForm = document.getElementById("todo-form");
let list = document.getElementById("todo-list");
let newTaskInput = document.getElementById("new-task");
let toDoTask;

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  toDoTask = newTaskInput.value.trim();

  if (toDoTask) {
    toDoTask =
      toDoTask.charAt(0).toUpperCase() + toDoTask.slice(1).toLowerCase();

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

    removeBtn.addEventListener("click", function () {
      taskContainer.remove();
    });

    liElement.addEventListener("click", function () {
      liElement.classList.add("zoomed-in");
      liElement.classList.remove("zoomed-out");
      liElement.setAttribute("contenteditable", "true");
      liElement.focus();
      liElement.style.borderBottom = "none";
    });

    liElement.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && event.target.isContentEditable) {
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

    checkBox.addEventListener("change", function () {
      let checkboxes = document.querySelectorAll(".check-box");
      let allBoxChecked = true;

      if (checkBox.checked) {
        liElement.style.textDecoration = "line-through";
      } else {
        liElement.style.textDecoration = "none";
      }

      for (let i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
          allBoxChecked = false;
          break;
        }
      }

      if (allBoxChecked) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }

      updateTaskOrder();
    });
  }
});

function updateTaskOrder() {
  var taskContainers = Array.from(document.querySelectorAll(".task-container"));

  var uncheckedTasks = taskContainers.filter(function (container) {
    return !container.querySelector(".check-box").checked;
  });

  var checkedTasks = taskContainers.filter(function (container) {
    return container.querySelector(".check-box").checked;
  });

  list.innerHTML = "";

  uncheckedTasks.forEach(function (task) {
    list.appendChild(task);
  });

  checkedTasks.forEach(function (task) {
    list.appendChild(task);
  });
}
