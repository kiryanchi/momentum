const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS_NAME = 'hidden';

function paintUserName(userName) {
	greeting.innerText = `Hello ${userName}`;
	greeting.classList.remove(HIDDEN_CLASS_NAME);
	loginForm.classList.add(HIDDEN_CLASS_NAME);
}

function loadUserName() {
	const userName = localStorage.getItem('userName');
	if (userName) {
		paintUserName(userName);
	}
}

function handleLoginButtonClick(event) {
	event.preventDefault();
	const userName = loginInput.value;

	localStorage.setItem('userName', userName);

	paintUserName(userName);
}

loadUserName();
loginForm.addEventListener("submit", handleLoginButtonClick);
