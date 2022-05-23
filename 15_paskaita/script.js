// JS sort ir reduce metodai

// // Padeda ištrinti arba įterpti masyvo elementą į pasirinktą vieną
// // .splice()

// const sentence = ["I", "study", "JavaScript", "right", "now"];

// // const removed = sentence.splice(0, 2); // removes first 2 elements
// // ištrina pirmus du ir grąžina
// // sentence.splice(2, 2); // skaicia rasosi taip (nuo kelintos vietos, antras kiek)

// // console.log(sentence);
// // sentence.splice(2, 1, "TypeScript"); // pakeiciam vietoj "JavaScript" i "TypeScript"
// // sentence[2] = "TypeScript";
// // console.log(sentence);

// // sentence.splice(1, 4, "studied", "typescript", "before");
// // console.log(sentence);

// // const sliced = sentence.slice(0, 3); // pirmus tris elementus
// // const sliced = sentence.slice(-3); // paima paskutinius tris
// // console.log(sliced); // pavyzdziu yra 13 paskaitoje

// // .reduce()

// const numbers = [7, 8, 1, 0.50, 8, 6, 10, 20, 30, 40];

// const total = numbers.reduce((total, number) => total + number, 0); // trumpesne versija

// const total = numbers.reduce((total, number) => {
//     console.log(total);
//     return total + number;
// }, 0); // intialValue (0) - reiksme nuo kurios prades skaiciuoti

// console.log("");
// console.log(total);

// .sort()

// const numbers = [7, 8, 1, 0.50, 8, 6, 10, 20, 30, 40];

// const sortedAscendingOrder = numbers.sort((a, b) => a - b); // didejimo tvarka rykiavimas
// const sortedDescendingOrder = numbers.sort((a,b) => b - a); // mazejimo tvarka rykiavimas
// console.log(sortedAscendingOrder);
// console.log(sortedDescendingOrder);

// const styles = ["Jazz", "Blues"];
// console.log(styles);

// styles.push("Rock-n-Roll");
// console.log(styles);

// // const styles = ["Jazz", "Blues"];
// styles.splice(1, 1, "Classics")
// console.log(styles);

// // const styles = ["Jazz", "Blues"];
// styles.shift();
// console.log(styles);

// styles.unshift("Rap", "Regggae");
// console.log(styles);

// const arr = [11, -2, 34, 45, 19, 6];

// function getMaxSubSum(array) {
//     const sum = array.reduce((total, num) => (num > 0 ? num : total), 0);
//     return sum;
// }
// const sum = getMaxSubSum(arr);
// console.log(sum);

// CAO užduotys

//  .sort()

// const names = ["Rima", "Asta", "Evaldas"];

// // names.sort();  // eilės tvarka
// // console.log(names);

// const sortReverse = names.sort((a, b) => b - a );
// console.log(names); // atvirkščiai 

// const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];

// const sort = numbers.sort((a ,b) => a - b);
// console.log(numbers); // nuo didžiausio iki mažiausio

// const numbers = [10, 5, 20, 4]; 

// const sort = numbers.sort((a, b) => b - a);
// console.log(numbers[0]); // grąžiną dižiausią skaičių

// .reduce()

// const numbers = [7, 2, 9, 1, 3];

// const intialValue = 0;
// const sumWithInitial = numbers.reduce(
//     (previuosValue, currentValue) => previuosValue + currentValue,
//     intialValue
// );

// console.log(sumWithInitial); // sudeda ir grąžiną vieną skaičių

// const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

// const car = cars.reduce((a, v) => v.length === 3 ? a + 1: a, 0);
// console.log(car); // grąžiną skaičių, kiek šiae elementę array yra su 3 simboliais

// const numbers = [5, 10, 20, 4, 11, 13];

// const number = numbers.reduce((a, v) => a > v ? a : v);
// console.log(number); // grąžina didžiausia skaičių su reduce