// 1 užduotis

// function timeConvert(n) {
//     const num = n;
//     const hours = (num / 60);
//     const rhours = Math.floor(hours);
//     const minutes = (hours - rhours) * 60;
//     const rminutes = Math.round(minutes);

//     return `${rhours} hour(s) and ${rminutes} minute(s)`;
// };

// console.log(timeConvert(200));

// const timeConvert = (a) => {
//     const minutes = a % 60;
//     const hours = Math.floor(a / 60);
    
//     return `${hours} hour(s) and ${minutes} minute(s)`
// };

// console.log(timeConvert(200));

// function timeConvert(totalMinutes) {
//     const minutes = totalMinutes % 60;
//     const hours = Math.floor(totalMinutes / 60);

//     return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`
// };

// function padTo2Digits(num) {
//     return num.toString().padStart(2, '0');
// };

// console.log(timeConvert(115));


// 2 užduotis

// ?

// 3 užduotis

// const pow = (number, count) => number ** count;
// console.log(pow(3, 3));

// 4 užduotis

// const squareArea = (x, y) => (x*y);
// console.log(squareArea(5,4));

// 5 užduotis

// const firstChar = (string) => string.charAt(string.lenght, 0).toUpperCase();
// console.log(firstChar("rima"));

// 6 užduoris

// const reverseString = (string) => {
//     const splitted = string.split("");
//     const firstChar = splitted.charAt(0);
//     // const joined = reversed.join("");
//     // const lowerCased = joined.toLowerCase();
    
//     return firstChar;
// };

// console.log(reverseString("Rima"));

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.addToTable = function () {
        const nameColumn = document.createElement('td');
        nameColumn.textContent = this.name;
        const surnameColumn = document.createElement('td');
        surnameColumn.textContent = this.surname;
        const tr = document.createElement('tr');
        tr.append(nameColumn, surnameColumn);
        document.querySelector('table > tbody').append(tr);
    };
}

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const fullname = document.getElementById("fullname").ariaValueMax;
    const [name, surname] = fullname.split(' ').map(namePart => capitalize(namePart.trim()));

    const person = new Person(name, surname);
    person.addToTable();
})