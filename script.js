let taskList = document.querySelector(".tasks-list");
let taskInput = document.querySelector(".task-input");
let addTaskBtn = document.querySelector(".add-btn");
let tasks = JSON.parse(localStorage.getItem("taskslist")) || [];

function getAllTasks() {
  taskList.innerHTML = "";
  tasks.forEach((el) => {
    return (taskList.innerHTML += `
        <li>
        <p>${el.taskText}</p>
        <i onClick="deleteTask(${el.id})" class="fa-solid fa-trash"></i>
        </li>
        `);
  });
}
getAllTasks();
addTaskBtn.addEventListener("click", () => {
  if (taskInput.value != "") {
    let task = {
      id: Date.now(),
      taskText: taskInput.value,
    };
    tasks.push(task);
    localStorage.setItem("taskslist", JSON.stringify(tasks));
    taskInput.value = "";
    getAllTasks();
  } else {
    alert("Please write task!");
  }
});
function deleteTask(id) {
  tasks = tasks.filter((el) => el.id != id);
  localStorage.setItem("taskslist", JSON.stringify(tasks));
  getAllTasks();
}
