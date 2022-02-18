const body = document.querySelector("body");

const IMAGE_LIST = ['./static/1.jpeg', './static/2.jpeg', './static/3.jpeg'];

// console.log(Math.random()IMAGE_LIST.length)
document.body.style.backgroundImage = `url(${IMAGE_LIST[Math.floor(Math.random() * IMAGE_LIST.length)]})`;
