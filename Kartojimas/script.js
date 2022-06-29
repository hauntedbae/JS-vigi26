// const userName = "Rima";
// const goodbye = `Viso gero ${userName}, lauksime sugrįžtant! `;

// console.log(goodbye);

// const salary = 5000;
// console.log(`$ ${salary}`);

// const price = 10;

// if (price > 10) {
//   console.log("Perku");
// } else {
//   console.log("Neperku");
// }

// const hours = 24;
// let result = "";

// if (hours >= 0 && hours < 6) {
//   result = "Naktis";
// } else if (hours >= 6 && hours <= 12) {
//   result = "Rytas";
// } else if (hours >= 12 && hours <= 18) {
//   result = "Diena";
// } else if (hours >= 18 && hours <= 24) {
//   result = "Vakaras";
// } else {
//   result = "Netinkamas laikas";
// }

// console.log(result);

// const price = 10;
// const resultTernary = price > 10 ? "Perku" : "Neperku";
// console.log(resultTernary);

// const hours = 24;
// const result =
//   hours >= 0 && hours < 6
//     ? "Rytas"
//     : hours >= 12 && hours <= 18
//     ? "Diena"
//     : hours >= 18 && hours <= 24
//     ? "Vakaras"
//     : "Netinkamas laikas";

// console.log(result);

// const myName = "Rima";
// const myNameLength = myName.length;

// const result = myName[0] + myName.slice(-1);
// console.log(result);
// console.log(myNameLength);

// for (let i = 0; i < myName.length; i++) {
//   const char = myName[i];
//   console.log(char);
// }

// for (let i = 0; i < myName.length; i++) {
//   const char = myName[i];
//   console.log(`${i + 1} raidė yra ${char}`);
// }

// Funkcijos yra vienas iš pagrindinių "JavaScript" blokų.
// Funkcija "JavaScript" yra panaši į procedūrą - komandų rinkinį,
// kuris atlieka tam tikrą užduotį arba apskaičiuoja vertę, tačiau,
// kad procedūra būtų laikoma funkcija, ji turi priimti tam tikrą
// įvestį ir grąžinti išvestį, kai tarp įvesties ir išvesties yra
// akivaizdus ryšys. Kad galėtumėte naudoti funkciją, turite ją
// apibrėžti kažkur srityje, iš kurios norite ją iškviesti.

// Turi return

// function square(number) {
//   return number * number;
// }

// const squared = square(5);

// console.log(squared);
// console.log(square(5));

// function cube(number) {
//   return number * number * number;
// }

// const cubed = cube(3);
// console.log(cubed);

// function multiplication(num1, num2) {
//   return num1 * num2;
// }

// console.log(multiplication(2, 3));

// function composition(num1, num2) {
//   return num1 + num2;
// }

// console.log(composition(6, 9));

// function substract(num1, num2) {
//   return num1 - num2;
// }

// console.log(substract(10, 2));

// function division(num1, num2) {
//   return num1 / num2;
// }

// console.log(division(27, 3));

// const person = "Rima";

// function getStringLength(person) {
//   return person.length;
// }

// console.log(getStringLength(person));

// function firstNumber(num1, num2) {
//   if (num1 > num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(firstNumber(10, 5));

// const string = "Rima";

// // nenuadoti and, geriau butu firstLastChar
// function firstAndLastChar(string) {
//   return string[0] + string.slice(-1);
// }

// console.log(firstAndLastChar(string));

// // Neturi return

// function showMessage(message) {
//   console.log(message);
// }

// showMessage("Rima");

// // Neturi argumento

// function getRandomNumber() {
//   return Math.random();
// }

// console.log(getRandomNumber());

// const names = ["Rima", "Jonas", "Petras", "Kristina"];

// function addNewStudent(studentName) {
//   names.push(studentName);
// }

// console.log(names);

// addNewStudent("Antanas");

// console.log(names);

// array.push() - stumia i gala
// array.pop() - ismeta is galo
// array.unshift() - istumia i prieki
// array.shift() - ismeta is priekio

// const names = ["Rima", "Jonas", "Petras", "Kristina"];

// function addNewStudent(studentName) {
//   names.unshift(studentName);
// }

// function removeStudent() {
//   names.pop();
// }

// console.log(names);

// addNewStudent("Antanas");

// console.log(names);

// removeStudent();
// console.log(names);

// const colors = ["Red", "Blue", "Green", "White", "Black", "Yellow", "Purple"];

// function modifiedColors(colors) {
//   colors.pop();
//   colors.shift();
//   colors.shift();
//   colors.shift();
//   colors.shift();
//   colors.shift();
//   colors.unshift("Green");
// }

// function reverseColors(colors) {
//   colors.shift();
//   //   colors.unshift("Red", "Blue", "Green", "White", "Black");
//   colors.unshift("Red");
//   colors.unshift("Blue");
//   colors.unshift("Green");
//   colors.unshift("White");
//   colors.unshift("Black");
//   colors.push("Purple");
// }

// function reverseArray(array) {
//   array.reverse();
// }

// modifiedColors(colors);
// console.log(colors);

// reverseColors(colors);
// console.log(colors);

// reverseArray(colors);
// console.log(colors);

// colors.forEach((color) => {
//   console.log(color);
// });

// function doubleArrayItem(array) {
//   return array.map((item) => item + item);
// }

// const doubledItems = doubleArrayItem(colors);

// console.log(doubledItems);

const colors = ["Red", "Blue", "Green", "White", "Black", "Yellow", "Purple"];

// function removeColors() {
//   colors.splice(3, 2);
// }

// removeColors(colors);
// console.log(colors);

// function changeColor() {
//   colors.splice(3, 1, "Orange");
// }

// changeColor(colors);
// console.log(colors);

const findColor = colors.find((colors) => colors.charAt(0) === "e");

console.log(findColor);

// const colorsLength = colors.filter((colors) => colors.length < 4);

// console.log(colorsLength);
