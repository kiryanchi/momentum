const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list")

let TODOS = []

function removeTodo(event) {
	const selectLi = event.target.parentElement;
	console.log(selectLi.id);
	todoList.removeChild(selectLi);
	const selectTodo = TODOS.findIndex(todo => todo.id == selectLi.id);
	TODOS.splice(selectTodo, 1);
	saveTodo();
}

function saveTodo() {
	localStorage.setItem('Todos', JSON.stringify(TODOS));
}

function paintTodo(todo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");

	li.id = todo.id;
	span.innerText = todo.value;
	button.innerText = 'X';

	button.addEventListener("click", removeTodo);

	li.appendChild(span);
	li.appendChild(button);

	todoList.appendChild(li);
}

function initializeTodos() {
	const todos = localStorage.getItem('Todos');
	if (todos) {
		TODOS = JSON.parse(todos);
	}
	console.log(TODOS);
	TODOS.forEach(todo => {
		paintTodo(todo);
	})
}

initializeTodos();

todoForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const value = todoInput.value;
	const objText = {
		id: Date.now(),
		value
	};
	todoInput.value = "";
	TODOS.push(objText);
	const li = paintTodo(objText);
	saveTodo(li);
	console.log(value);
});
