// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34,27);
// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (scoreDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win with ${scoreDolphins} vs ${scoreKoalas}`)
//     }
//     else if (scoreKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins with ${scoreKoalas} vs ${scoreDolphins}`)
//     }
//     else (
//         console.log(`No one wins`)
//     )
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

// let markMass = 78;
// let johnMass = 92;
// console.log(markMass, johnMass);

// let markHeight = 1.69;
// let johnHeight = 1.95;
// console.log(markHeight, johnHeight);

// let markBMI = markMass / (markHeight ** 2);
// let johnBMI = johnMass / (markHeight * markHeight);
// console.log(markBMI, johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}`);
// }
// else {
//     console.log(`John's BMI of ${johnBMI} is higher than Mark's BMI of ${markBMI}`);
// }


// let averageScore = (a, b, c) => (a + b + c) / 3;
// console.log(averageScore(3, 4, 5));

// let scoreDolphins = averageScore(96, 108, 89);
// let scoreKoalas = averageScore(88, 91, 110);
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win`)
// }
// else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`Koalas wins`)
// }
// else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`Both win`)
// }
// else {
//     console.log(`No one wins`)
// }


// let bill = 275;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip} and the final value was ${bill + tip}`);


// bill = 40;
// tip = bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip} and the final value was ${bill + tip}`);

// bill = 430;
// tip = bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip} and the final value was ${bill + tip}`);

// bill = 800;
// tip = bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip} and the final value was ${bill + tip}`);


// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(1, 2, 3));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (scoreDolphins >= 2 * scoreKoalas) {
//         console.log(`Dolphins win with ${scoreDolphins} to ${scoreKoalas} `)
//     }
//     else if (scoreKoalas >= 2 * scoreDolphins) {
//         console.log(`Koalas wins with ${scoreKoalas} to ${scoreDolphins}`)
//     }
//     else {
//         console.log(`No one wins`)
//     }
// }
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// console.log(checkWinner(scoreDolphins, scoreKoalas));




function calcTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills);
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];
console.log(totals);