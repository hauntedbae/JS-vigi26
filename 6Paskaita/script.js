// console.log("6 paskaita. Masyvai, funkcijos ir elementai");

// STRING

// const myName = "Rima";
// const nameLenght = myName.length;
// const firstChar = myName[0];
// const lastChar = myName[myName.length - 1];
// const middleChar = myName[myName.length / 2];
// // const middleChar = myName[Math.floor(myName.length / 2)]; - uzapvalina
// // console.log(myName.length); - vardo ilgis (skaitmenys), grazina ilgi musu stringo
// console.log(firstChar);
// console.log(lastChar);
// console.log(middleChar);
// console.log(myName[0]);

// for (let i = 0; i < myName.length; i++) {
//     const char = myName[i];
//     // console.log(char); - po viena raide
//     // console.log(`${i + 1}. ${char}`); 1. R; 2. i;..
// }

// const firstChar = myName.charAt(0);
// console.log(firstChar);
// const lastChar = myName.charAt(myName.length - 1);
// console.log(lastChar);


// ARRAY

// const chars = ["R", "i", "m", "a"];
// const fruits = ["apple", "banana", "pear"];
// // console.log(fruits.length);
// // console.log(fruits[1]);

// for(let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     // console.log(student);
//     if(student.length > 5) {
//         console.log(`Vardas ${student} turi daugiau nei 5 raides`);
//     } else if(student.length < 5) {
//         console.log(`Vardas ${student} turi maziau nei 5 raides`);
//     } else {
//         console.log(`Vardas ${student} turi lygiai 5 raides`);
//     }
// }

// const basket = [7, 10, 0.5, 23, 41];
// let total = 0;

// for(let i = 0; i < basket.length; i++) {
//     const number = basket[i];
//     total += number;
// }
// console.log(total);


// FUNCTIONS

// 1. void funkcija - neturi return reiksmes
// 2. return funkcija - turi return reiksme

//              (10)
function square(number) {
    return number * number;
}

const squaredNumber = square(5);
console.log(squaredNumber);

function logger(value) {
    console.log(value);
}

logger("Testing..."); 
// nereikiajos iskviesti (rasyti console.log())

// function printAllArayItems(array) {
//     for(let i = 0; i < array.length; i++) {
//         const item = array[i];
//         console.log(item);
//     }
// }

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

// printAllArayItems(students);

// function repeatString(string, count) {
//     let finalString = "";
//     for(let i = 0; i < count; i++) {
//         finalString += string;
//     }
//     return finalString;
// }

// const repeatedString = repeatString("Rima", 5);
// console.log(repeatedString);

// function addition (a, b) {
//     return a + b;
// }

// function substraction (a, b) {
//     return a - b;
// }

// console.log(addition(5, 4));
// console.log(substraction(9, 2));