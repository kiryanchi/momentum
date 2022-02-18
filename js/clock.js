const clock = document.querySelector("#clock");

setInterval(() => {
	const now = new Date();

	clock.innerText = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
})
