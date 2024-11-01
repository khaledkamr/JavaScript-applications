 
let form = document.querySelector("form");
let input = document.querySelector(".input");
let addTask = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

document.addEventListener("DOMContentLoaded", loadTasks);

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

addTask.onclick = function () {
  if (input.value.trim() != "") {
    let taskText = input.value.trim();
    let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];
    if (!taskArr.includes(taskText)) {
      addTaskToTasks(taskText);
      saveTaskToLocalStorage(taskText);
    } 
    else {
      let taskElements = document.querySelectorAll(".tasks div");
      taskElements.forEach((task) => {
        if (task.firstChild.textContent == taskText) {
          task.classList.remove("animate");
          requestAnimationFrame(() => {
            task.classList.add('animate');
          });
        }
      });
    }
    input.value = "";
  }
};

function addTaskToTasks(taskText) {
  let task = document.createElement("div");
  let taskContent = document.createTextNode(taskText);
  let del = document.createElement("button");
  del.textContent = "Delete";
  del.onclick = function () {
    task.remove();
    removeTaskFromLocalStorage(taskText);
  };
  task.appendChild(taskContent);
  task.appendChild(del);
  tasks.appendChild(task);
}

function saveTaskToLocalStorage(taskText) {
  let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];
  taskArr.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(taskArr));
}

function removeTaskFromLocalStorage(taskText) {
  let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(taskArr);
  taskArr = taskArr.filter((task) => {
    return task !== taskText;
  });
  console.log(taskArr);
  localStorage.setItem("tasks", JSON.stringify(taskArr));
}

function loadTasks() {
  let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];
  taskArr.forEach((task) => {
    addTaskToTasks(task);
  });
}
