// DOM Means Document Object Model.

/* const richard = document.querySelector(".head");
richard.style.color = "red"; */

/* const richard = document.querySelector(".head");
richard.classList.add("flow"); */

const richard = document.querySelector(".head");
const myButton = document.querySelector(".button");
myButton.addEventListener("click", function(){
    richard.classList.add("flow")
});