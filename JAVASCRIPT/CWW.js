// NO 1
const identity = "Sada";

const age = 33;

function printDetails () {
    console.log(`My name is ${identity} and I am ${age} years old`);
} printDetails()

// NO 2
const a = 20;

const b = 2;

function divide (a,b) {
    if(b === 0) {
        console.log(`Error: Division by zero is not allowed.`);
    }
    else {
        console.log(a/b);
    }
}divide(a,b)

// NO 3
const currentHour = 17;

function greet () {
    if(currentHour < 12) {
        console.log(`Good morning!`);
    }
    else if(currentHour <= 17) {
        console.log(`Good afternoon!`);
    }
    else {
        console.log(`Good evening!`) ;
    }
}greet()

// NO 4
const temp = 36;

function checkWeather() {
    if(temp < 0) {
        console.log(`Its freezing!`);
    }
    else if(temp <= 15) {
        console.log(`Its cold!`);
    }
    else if(temp <= 25) {
        console.log(`Its warm!`);
    }
    else {
        console.log(`Its hot!`);
    }
}checkWeather()

// NO 5
const num1 = 34;
const num2 = 22;

function compareNumbers() {
    if(`${num1} > ${num2}`) {
        console.log(`${num1} is greater than ${num2}`);
    }
    else if(`${num1} < ${num2}`) {
        console.log(`${num1} is less than ${num2}`);
    }
    else {
        console.log(`${num1} is equal to ${num2}`);
    }
}compareNumbers()

// NO 6
const password = 12;

function checkPasswordStrength() {
    if(password < 6) {
        console.log(`Weak Password`);
    }
    else if(password <=10) {
        console.log(`Moderate Password`);
    }
    else {
        console.log(`Strong Password`);
    }
}checkPasswordStrength()

// No 7
function authenticateUser() {
    const correctUserName = "thaturhobodude";
    const correctPassword = "urhoboboyishere";

    alert("Hi!!! Welcome to sadaworld.com");
    
    const username = prompt("What is your username?");
    const password = prompt("What is your password?");

    if(username === `${correctUserName}`&& password === `${correctPassword}`) {
        alert(`Welcome ${correctUserName}`)
        console.log(`Welcome`);
        document.write(
            `Hello, ${correctUserName}. Welcome to sadaworld.com. Thank you for login in.`
        );
    }
    else{
        alert(`Wrong details submitted`)
        console.log(`Please re-check your username and password`);
        document.write(
            `Hello, your details are wrong. Please re-check`
        );
    }   
}authenticateUser()

// NO 8
function userInput() {
    const person = {
        firstName: "Eseoghene",
        middleName: "Richard",
        lastName: "Sada-Okpaka",
        age: 33,
        hobby: "Watching and playing football",
        intro: "I am a pharmacist and I love to solve problems. I love front end development and that is why I am learning from the best which is Vephla Institute.",
    };

    alert("Hi, I am Sada-Okpaka Eseoghene Richard")
    console.log(person);
    document.write(
        ` Hello, I am Sada and its a pleasure to be here`
    );

}userInput()

// NO 9
function movieTicket() {
    const age = 12;
    const isStudent = "Student";
    const isSenior = "Senior";

    if(age < 12) {
        alert(`You are not up to 12years old.`);
        console.log(`You are not eligible`);
        document.write(`Sorry, you cannot be granted access because you did not meet the requirements`);
    }

    else if(age => 12 && isStudent === Student || isSenior === Senior) {
        alert(`You are eligible.`);
        console.log(`You are eligible`);
        document.write(` Congratulations, you have been granted a movie ticket discount`);
    }
    else {
        console.log(`You are eligible`);
    }

}movieTicket()

// NO 10 
const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
];
console.log(fruits);

fruits.pop();
fruits.push(`Pineapple`);
fruits.shift();
console.log(fruits);

// NO 11
const htmlPage = document.querySelector(".para");
const myBtn = document.querySelector(".btn");

myBtn.addEventListener("click", function() {
    htmlPage.classList.add("vue")
});
 





