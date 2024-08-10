alert("Welcome To The Website Of Association of Community Pharmacists Of Nigeria, Delta State Chapter");

const visitor = prompt("First Time Visitor");
const name = prompt("Full Name");
const pcnNo = prompt("PCN Number");
const state = prompt("State of Practice");

if(visitor === "Yes") {
    console.log(`WELCOME TO ACPN DELTA STATE CHAPTER`);
}else {
    console.log(`DO YOU WANT TO CONTINUE FROM WHERE YOU STOPPED?`);
}

const header4 = document.querySelector(".head4");
header4.style.color = "green";

const about = document.querySelector(".sec2a");
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
    about.classList.add("covet")
});

const footLink = document.querySelector("span");
footLink.classList.add("vet");



