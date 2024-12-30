console.log("Cześć!");

let button = document.querySelector(".button");
let header = document.querySelector(".header");

button.addEventListener("click", () => {
    header.remove();
});

console.log(button);