alert("Welcome to The Students Result Sheet")

const header = document.querySelector(".main h2");
const headerButton = document.querySelector(".main button");

headerButton.addEventListener("click", function() {
    header.classList.add("ready")
});


function calculateScores() {
    // Get all the table rows
    const rows = document.querySelector(".scoreTable").rows;

    // Calculate total and average for each student
    function calculate(row) {
        const math = Number(row.cells[3].innerText);
        const english = Number(row.cells[4].innerText);
        const government = Number(row.cells[5].innerText);
        const litEnglish = Number(row.cells[6].innerText);
        const history = Number(row.cells[7].innerText);
        const biology = Number(row.cells[8].innerText);
        
        const total = math + english + government + litEnglish + history + biology;
        const average = total / 6;

        row.cells[9].innerText = total;
        row.cells[10].innerText = average.toFixed(1);  // Using toFixed to limit to 1 decimal place

        return total;
    }

    // Calculate totals and store them in variables
    const total1 = calculate(rows[1]);
    const total2 = calculate(rows[2]);
    const total3 = calculate(rows[3]);
    const total4 = calculate(rows[4]);
    const total5 = calculate(rows[5]);
    const total6 = calculate(rows[6]);
    const total7 = calculate(rows[7]);
    const total8 = calculate(rows[8]);
    const total9 = calculate(rows[9]);
    const total10 = calculate(rows[10]);

    // Determine positions using if-else
    const totals = [total1, total2, total3, total4, total5, total6, total7, total8, total9, total10];
    const positions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    if (total1 >= total2 && total1 >= total3 && total1 >= total4 && total1 >= total5 && total1 >= total6 && total1 >= total7 && total1 >= total8 && total1 >= total9 && total1 >= total10) {
        positions[0] = 1;
    } else if (total1 < total2 && total1 < total3 && total1 < total4 && total1 < total5 && total1 < total6 && total1 < total7 && total1 < total8 && total1 < total9 && total1 < total10) {
        positions[0] = 10;
    } else {
        positions[0] = 2;
    }
    if (total2 >= total1 && total2 >= total3 && total2 >= total4 && total2 >= total5 && total2 >= total6 && total2 >= total7 && total2 >= total8 && total2 >= total9 && total2 >= total10) {
        positions[1] = 1;
    } else if (total2 < total1 && total2 < total3 && total2 < total4 && total2 < total5 && total2 < total6 && total2 < total7 && total2 < total8 && total2 < total9 && total2 < total10) {
        positions[1] = 10;
    } else {
        positions[1] = 2;
    }
    if (total3 >= total1 && total3 >= total2 && total3 >= total4 && total3 >= total5 && total3 >= total6 && total3 >= total7 && total3 >= total8 && total3 >= total9 && total3 >= total10) {
        positions[2] = 1;
    } else if (total3 < total1 && total3 < total2 && total3 < total4 && total3 < total5 && total3 < total6 && total3 < total7 && total3 < total8 && total3 < total9 && total3 < total10) {
        positions[2] = 10;
    } else {
        positions[2] = 2;
    }
    if (total4 >= total1 && total4 >= total2 && total4 >= total3 && total4 >= total5 && total4 >= total6 && total4 >= total7 && total4 >= total8 && total4 >= total9 && total4 >= total10) {
        positions[3] = 1;
    } else if (total4 < total1 && total4 < total2 && total4 < total3 && total4 < total5 && total4 < total6 && total4 < total7 && total4 < total8 && total4 < total9 && total4 < total10) {
        positions[3] = 10;
    } else {
        positions[3] = 2;
    }
    if (total5 >= total1 && total5 >= total2 && total5 >= total3 && total5 >= total4 && total5 >= total6 && total5 >= total7 && total5 >= total8 && total5 >= total9 && total5 >= total10) {
        positions[4] = 1;
    } else if (total5 < total1 && total5 < total2 && total5 < total3 && total5 < total4 && total5 < total6 && total5 < total7 && total5 < total8 && total5 < total9 && total5 < total10) {
        positions[4] = 10;
    } else {
        positions[4] = 2;
    }
    if (total6 >= total1 && total6 >= total2 && total6 >= total3 && total6 >= total4 && total6 >= total5 && total6 >= total7 && total6 >= total8 && total6 >= total9 && total6 >= total10) {
        positions[5] = 1;
    } else if (total6 < total1 && total6 < total2 && total6 < total3 && total6 < total4 && total6 < total5 && total6 < total7 && total6 < total8 && total6 < total9 && total6 < total10) {
        positions[5] = 10;
    } else {
        positions[5] = 2;
    }
    if (total7 >= total1 && total7 >= total2 && total7 >= total3 && total7 >= total4 && total7 >= total5 && total7 >= total6 && total7 >= total8 && total7 >= total9 && total7 >= total10) {
        positions[6] = 1;
    } else if (total7 < total1 && total7 < total2 && total7 < total3 && total7 < total4 && total7 < total5 && total7 < total6 && total7 < total8 && total7 < total9 && total7 < total10) {
        positions[6] = 10;
    } else {
        positions[6] = 2;
    }
    if (total8 >= total1 && total8 >= total2 && total8 >= total3 && total8 >= total4 && total8 >= total5 && total8 >= total6 && total8 >= total7 && total8 >= total9 && total8 >= total10) {
        positions[7] = 1;
    } else if (total8 < total1 && total8 < total2 && total8 < total3 && total8 < total4 && total8 < total5 && total8 < total6 && total8 < total7 && total8 < total9 && total8 < total10) {
        positions[7] = 10;
    } else {
        positions[7] = 2;
    }
    if (total9 >= total1 && total9 >= total2 && total9 >= total3 && total9 >= total4 && total9 >= total5 && total9 >= total6 && total9 >= total7 && total9 >= total8 && total9 >= total10) {
        positions[8] = 1;
    } else if (total9 < total1 && total9 < total2 && total9 < total3 && total9 < total4 && total9 < total5 && total9 < total6 && total9 < total7 && total9 < total8 && total9 < total10) {
        positions[8] = 10;
    } else {
        positions[8] = 2;
    }
    if (total10 >= total1 && total10 >= total2 && total10 >= total3 && total10 >= total4 && total10 >= total5 && total10 >= total6 && total10 >= total7 && total10 >= total8 && total10 >= total9) {
        positions[9] = 1;
    } else if (total10 < total1 && total10 < total2 && total10 < total3 && total10 < total4 && total10 < total5 && total10 < total6 && total10 < total7 && total10 < total8 && total10 < total9) {
        positions[9] = 10;
    } else {
        positions[9] = 2;
    }

    // Assign positions to the table
    rows[1].cells[11].innerText = positions[0];
    rows[2].cells[11].innerText = positions[1];
    rows[3].cells[11].innerText = positions[2];
    rows[4].cells[11].innerText = positions[3];
    rows[5].cells[11].innerText = positions[4];
    rows[6].cells[11].innerText = positions[5];
    rows[7].cells[11].innerText = positions[6];
    rows[8].cells[11].innerText = positions[7];
    rows[9].cells[11].innerText = positions[8];
    rows[10].cells[11].innerText = positions[9];
}

// Function to display the first position
function showFirstPosition() {
    const firstPosition = document.querySelector(".firstPosition");
    firstPosition.innerHTML = "<h3>First Position: Okoli Nnamdi</h3>";
}
function showSecondPosition(){
    const secondPosition = document.querySelector(".secondPosition");
    secondPosition.innerHTML = "<h3>Second Position: Effiong Uduak</h3>"
}
function showThirdPosition(){
    const thirdPosition = document.querySelector(".thirdPosition");
    thirdPosition.innerHTML = "<h3>Third Position: Gowon Musa</h3>"
}
function showFourthPosition(){
    const fourthPosition = document.querySelector(".fourthPosition");
    fourthPosition.innerHTML = "<h3>Fourth Position: Oleyemi Isaac</h3>"
}
function showFifthPosition(){
    const fifthPosition = document.querySelector(".fifthPosition");
    fifthPosition.innerHTML = "<h3>Fifth Position: Udoma Mary</h3>"
}
function showSixthPosition(){
    const sixthPosition = document.querySelector(".sixthPosition");
    sixthPosition.innerHTML = "<h3>Sixth Position: Abiola Mary</h3>"
}
function showSeventhPosition(){
    const seventhPosition = document.querySelector(".seventhPosition");
    seventhPosition.innerHTML = "<h3>Seventh Position: Blessing Tosan</h3>"
}
function showEighthPosition(){
    const eighthPosition = document.querySelector(".eighthPosition");
    eighthPosition.innerHTML = "<h3>Eighth Position: Ovie Eseosa</h3>"
}
function showNinthPosition(){
    const ninthPosition = document.querySelector(".ninthPosition");
    ninthPosition.innerHTML = "<h3>Ninth Position: Balogun Tolani</h3>"
}
function showTenthPosition(){
    const tenthPosition = document.querySelector(".tenthPosition");
    tenthPosition.innerHTML = "<h3>Tenth Position: ahmed Bayero</h3>"
}


// Calling calculateScores when the page loads
calculateScores();