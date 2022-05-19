// Moetodai pop / push / shift / unshift

// const fruits = ["Apple", "Orange", "Pear"];

// // .pop() pašalina paskutini masyvo elementą ir jį grąžina
// const lastElement = fruits.pop();

// console.log(lastElement);
// console.log(fruits);

// .shift() - pašalina pirmąjį masyvo elementą ir jį grąžina

// const firstElement = fruits.shift();

// // fruits.shift(); 
// console.log(firstElement);
// console.log(fruits);

// .push() - prideda naują elementą į masyvo galą
// fruits.push("Banana");
// console.log(fruits);

// unshift() - prideda elementą prie masyvo pradžios
// fruits.unshift("Pineapple")
// console.log(fruits);

// galima ir du išeilės rašyt
// fruits.push("Banana");
// fruits.unshift("Pineapple");
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     console.log(`${i}.${fruit}`);
//     // console.log(fruit);
// }

// console.log(fruits);

// const upperCasedFruits = []

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];

//     const upperCased = fruit.toUpperCase();
//     upperCasedFruits.push(upperCased);
// }
// console.log(fruits);
// console.log(upperCasedFruits);


// Callback funkcija

// function log(name){
//     console.log(name);
// }

// // log("Rima");


// function showAlert(callback){
//     // alert("Rima");
//     callback("Rima")
// }

// showAlert(log);
// document.addEventListenner("click", log);

// Ciklas, kuris praeina pro visus masyvo elementus
// .forEach() 

// const names = ["Bob", "Hellen", "Jack"];

// // names.forEach(showName)
// // function showName(name){
// //     console.log(name);
// // }

// names.forEach((name, index) => {
//     console.log(index + name);
// });

// .map() - ciklas, kuris praeina per visus masyvo elementus ir grazina nauja masyva

// const names = ["bOb", "helLen", "jaCK"];

// const modifiedNames = names.map((name) => {
//     // return name.repeat(2);
//     return name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase();
// } );

// console.log(names);
// console.log(modifiedNames);

// const ages = [12, 15, 23, 27, 25, 30, 35, 38];

// // .filter() - ciklas, kuris praeina per visus masyvo elementus ir grazina
// // nauja masyva, jei reiksme yra true(positive);

// const moreThanTwenty = ages.filter((age) => {
//     return age > 20;
// });

// const lessThanTwenty = ages.filter((ag)e => age < 20);

// console.log(moreThanTwenty);
// console.log(lessThanTwenty);

// const cars = ["BMW", "Mercedes", "Lamborghini", "Audi", "Lada"];
// // . find - suranda pirma elementa is masyvo , kuris atitinka 
// kriteriju (true) ir ji grazina;
// const found = cars.find(car => car.charAt(0) === "L");

// console.log(found);

// .some() - patikrina ar nors vienas elemenas atitinka kriteriju
// ir grazina true arba false;
// const cars = ["BMW", "Mercedes", "Lamborghini", "Audi", "Lada"];

// const hasShortName = cars.some(car => car.length < 4);
// console.log(hasShortName);

// .every - patikrina ar kiekvienas elementas atitinka kriteriju ir ji grazina true arba false
const cars = ["BMW", "Mercedes", "Lamborghini", "Audi", "Lada"];

const isEveryUpperCased = cars.every(
    (car) => car.charAt(0) === car.charAt(0).toUpperCase()
);

console.log(isEveryUpperCased);