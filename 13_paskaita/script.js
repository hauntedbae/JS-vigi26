// Žinoti primityvius duomenų tipus ir jų apibrėžimą.
// Boolean object
// Number object
// String object

/*

Primitive (primitive value, primitive data type) is data that is 
not an object and has no methods or properties.
There are 7 primitive data types: string, number, bigint, 
boolean, undefined, symbol, and null.

*/

const name = "Rokas";
const age = 7;
const isHot = true;
const notFound = undefined;
const noValue = null;

// const isHotString = Boolean(isHot).toString();
// const isHotString = (isHot).toString();

// console.log(isHot + isHot);
// console.log(isHotString + isHotString);

const count = "15";

const countNumber = Number(count);

// console.log(count + count);
// console.log(countNumber + countNumber);

// integer - sveikasis skaičius
// console.log(Number.isInteger(5.5));

const myNumber = 5.752;
// console.log(Number(myNumber).toString()); //galim paversti skaiciu i stringa
// console.log((myNumber).toString());
// console.log(myNumber.toFixed());
// console.log(myNumber.toFixed(1)); // uzapvalina kiek skaiciu po kablelio

const sentence = "My name is Rima and I am very happy";

// suranda stringe kito stringo dali
// case-sensitive (didziosios, mazosios raides)
// console.log(sentence.includes("happy"));

// console.log(sentence.slice(0, 16)); // pradzia ir pabaiga (My name is Rima)
// console.log(sentence.slice(20)); // nuo pradzio iki pat pabaigos ( Rima and I am very happy)
// console.log(sentence.slice(0, -5)); // nuo pradzios iki nukirpto galo (My name is Rima and I am very )
// console.log(sentence.slice(-5)); // nuo galo (happy)


// const badText = "   Help"
// console.log(sentence);
// console.log(badText.trim()); // istrina tuscius tarpus nuo priekio ir galo

// const upperCased = sentence.toUpperCase(); // visos raides didziosios
// console.log(upperCased);

// const lowerCased = sentence.toLowerCase(); // visos raides mazosios
// console.log(lowerCased);

// false
// function areSameStrings(firstString, secondString) {
//     return firstString === secondString;
// }

// true patikrina ar stingai vienodi (not case-sensitive)
// function areSameStrings(firstString, secondString) {
//     return firstString.toUpperCase() === secondString.toUpperCase();
// }

// console.log(areSameStrings("Rima", "rima"));

// const resultCount = 5;
// const dog = "Rikis"
// // let result = "";

// pakartoja tike stringa, kiek paduodam i argumenta skaiciu
// const result = dog.repeat(resultCount);
// console.log(result);
// // for (lt i = 0; i < resultCount; i++){
// //     result += dog
// // }

// // console.log(result);

// const tagInput = "Prekyba Marketingas Programavimas Vadyba"
// const tags = tagInput.split(" ");
// console.log(tags);

// const countryInput = "Anglija, Sveicarija, Amerika, Latvija, Gruzija";
// const countries = countryInput.split(", ")
// console.log(countries);