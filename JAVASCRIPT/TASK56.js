 // We are picking the selectors to be available in our JS

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Add Event Listeners

todoButton.addEventListener("click", addTodo);

//create function that would create to do for me

function addTodo(event) {
    //prevent the form input type from submitting
    event.preventDefault();
    // console.log("Hello Everyone");
    // create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check">';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //check trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash">';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to the list
    todoList.appendChild(todoDiv);
}