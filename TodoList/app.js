const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const lists = document.getElementById("todo-list");
const container = document.querySelector(".container")

form.addEventListener("submit", addTodo);

function addTodo(e) {
    const inputValue = input.value.trim();
    if (inputValue === "") {
        alert();
    } else {
        const newList = document.createElement("li");
        const newText = document.createElement("span");
        newText.innerText = inputValue;

        const removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.classList.add("button--light");


        newList.appendChild(newText);
        newList.appendChild(removeButton);
        lists.appendChild(newList);

        newList.addEventListener("click", function () {
            newText.classList.toggle("completed");
        })

        removeButton.addEventListener("click", function () {
            newList.remove();
        })

        input.value = "";
    }

    e.preventDefault();
}

function alert(e) {
    const newDiv = document.createElement("div")
    const newPar = document.createTextNode("Please, write a to do...");

    newDiv.appendChild(newPar);
    container.appendChild(newDiv);

    setTimeout(function () {
        newDiv.remove();
    }, 1000)

    newDiv.classList.add("alertdiv");

}