const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const lists = document.getElementById("todo-list");
const container = document.querySelector(".container");

const deleteButton = document.createElement("button");
deleteButton.textContent = "All Remove";
deleteButton.classList.add("delete-button");
container.appendChild(deleteButton);

form.addEventListener("submit", addTodo);
document.addEventListener('DOMContentLoaded',loadAllTodosToUI);

function addTodo(e) {
  const inputValue =
    input.value.trim()[0].toUpperCase() + input.value.trim().slice(1);
  if (inputValue === "") {
    showAlert("Please, write a to do...", "alertdiv");
  } else if (checkTodos(inputValue)) {
    showAlert("Please, enter a different to do...", "alertdiv2");
    input.value = "";
  } else {
    addTodoToUI(inputValue);
    addTodoToLocal(inputValue);
    showAlert("Todo was successfully entered", "alertdiv3");
  }

  e.preventDefault();
}

function showAlert(message, className) {
  const newDiv = document.createElement("div");
  newDiv.classList.add(className);
  const newPar = document.createTextNode(message);

  newDiv.appendChild(newPar);
  container.appendChild(newDiv);

  setTimeout(function () {
    newDiv.remove();
  }, 1000);
}

function addTodoToUI(inputValue) {
  const newList = document.createElement("li");
  const newText = document.createElement("span");
  newText.innerText = inputValue;

  const removeButton = document.createElement("button");
  removeButton.innerText = "X";
  removeButton.classList.add("button--light");

  newList.appendChild(newText);
  newList.appendChild(removeButton);
  lists.appendChild(newList);

  newList.addEventListener("click", () => {
    newText.classList.toggle("completed");
  });

  removeButton.addEventListener("click", () => {
    newList.remove();
    showAlert('Todo was deleted','alertdiv')
  });

  input.value = "";

  deleteButton.classList.add("open");
}

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addTodoToLocal(todo) {
  let todos = getTodosFromStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodos(todo) {
    let todos = getTodosFromStorage();
    return todos.includes(todo);
}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.map((todo) => addTodoToUI(todo))
} 

deleteButton.addEventListener("click", deleteAllLists);

function deleteAllLists() {
    lists.innerHTML = '';
    localStorage.removeItem('todos');
    deleteButton.classList.remove('open')
}