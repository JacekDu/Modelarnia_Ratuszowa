console.log("Cześć!");

let button = document.querySelector(".button");
let naglowek = document.querySelector(".naglowek");

button.addEventListener("click", () => {
    naglowek.remove();
});

console.log(button);