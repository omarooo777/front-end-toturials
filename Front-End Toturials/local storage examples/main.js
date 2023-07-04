// document.body.classList.add(localStorage.getItem("pageColor") || "red")

// let el = document.querySelectorAll(".color-container li")
// let classes = []

// for(let i = 0; i < el.length; i++) {
//   classes.push(el[i].getAttribute("data-color"));
//   el[i].addEventListener("click", function() {
//     document.body.classList.remove(...classes)
//     document.body.classList.add(this.getAttribute("data-color"))
//     localStorage.setItem("pageColor", this.getAttribute("data-color"))
//   })
// }
// document.body.classList.add(localStorage.getItem("pageColor") || "red")

let el = document.querySelectorAll(".color-container li");
let h3 = document.querySelector(".container h3");
h3.style.color = localStorage.getItem("pageColor") || "#c0392b";
let div = document.querySelector(".container div");
div.style.background = localStorage.getItem("pageColor") || "#c0392b";
let classes = [];

for (let i = 0; i < el.length; i++) {
  classes.push(el[i].getAttribute("data-color"));
  el[i].addEventListener("click", function () {
    h3.style.color = this.getAttribute("data-color");
    div.style.background = this.getAttribute("data-color");
    localStorage.setItem("pageColor", this.getAttribute("data-color"));
  });
}

let input = document.querySelector(".text-input");
let submit = document.querySelector(".btn");
let tasks = document.querySelector(".tasks");

let arrayOfTasks = [];

if (window.localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
    deletElementFromLocalStorage(
      e.target.parentElement.getAttribute("data-id")
    );
  }
  if (e.target.classList.contains("finished")) {
    e.target.parentElement.classList.toggle("done");
    updateData(e.target.parentElement.getAttribute("data-id"));
  }
  if (e.target.classList.contains("delete-all")) {
    tasks.innerHTML = "";
    deleteAllTasks()
  }
});

getDataFromLocalStorage();

submit.onclick = function (e) {
  e.preventDefault();
  if (input.value !== "") {
    addTasks(input.value);
    input.value = "";
  }
};

function addTasks(textInput) {
  const task = {
    id: Date.now(),
    title: textInput,
    completed: false,
  };
  arrayOfTasks.push(task);
  addElements(arrayOfTasks);
  addDataToLocalStorage(arrayOfTasks);
}

function addElements(arrayOfTasks) {
  tasks.innerHTML = "";
  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    if (task.completed) {
      div.classList.add("done");
    }
    let span = document.createElement("span");
    span.classList.add("del");
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    let done = document.createElement("span");
    done.classList.add("finished");
    done.appendChild(document.createTextNode("Done"));
    div.appendChild(done);
    tasks.appendChild(div);
  });
  if(tasks.children.length > 1) {
    let deleteAll = document.createElement("span");
    deleteAll.classList.add("delete-all")
    deleteAll.appendChild(document.createTextNode("Delete All"))
    tasks.appendChild(deleteAll)
  }
}

function addDataToLocalStorage(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let task = JSON.parse(data);
    addElements(task);
  }
}

function deletElementFromLocalStorage(task) {
  arrayOfTasks = arrayOfTasks.filter((el) => el.id != task);
  addDataToLocalStorage(arrayOfTasks);
  if(tasks.children.length == 2) {
    tasks.children[tasks.children.length - 1].remove()
  }
}
function updateData(task) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == task) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorage(arrayOfTasks);
  // console.log(tasks.children.length)
}

function deleteAllTasks() {
  window.localStorage.removeItem("tasks")
  arrayOfTasks = [];
  addDataToLocalStorage(arrayOfTasks)
}
