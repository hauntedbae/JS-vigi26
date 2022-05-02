// console.log("Trecia paskaita switch, ternarry, for ciklas");

const key = 6;

// Argumentas key turi atitikti case reiksme.
// nebutinai key, gali buti number.

// switch (key) {
//     case 1:
//         console.log('Pirmadienis');
//         break;

//     case 2:
//         console.log('Antradienis');
//         break;
//     case 3:
//         console.log('Treciadienis');
//         break;
//     case 4:
//         console.log('Ketvirtadienis');
//         break;
//     case 5:
//         console.log('Penktadienis');
//         break;
//     case 6:
//     case 7:
//         console.log('Savaitgalis');
//         break;
    
//     default:
//         console.log('Blogai irasyta savaites diena');
//         break;
// }

// // Jei pasikartojanti reiksme, galima naudoti switch case

// const age = 15;
// const legalAge = 18;
// const drinkingAge = 20;
// const celciusDegrees = 26;

// let result = "Pilnametis";

// if (age < legalAge) {
//     result = "Nepilnametis"
// }
// //                    if salyga         patenkina       else
// const resultTernary = age < legalAge ? "Nepilnametis" : "Pilnametis"; 
// const drink = age >= drinkingAge ? "beer" : "Milk";
// const weather = 
//     celciusDegrees <= 0 ? "Cold" : celciusDegrees <= 25 ? "Warm" : "Hot";

// console.log(weather);
// console.log(drink);

// Ternary simboliai - ? :
// ? if
// : else

const name = 'Rima';
const surname = 'Sakalauskaite'

console.log(name + ' ' + surname);
// sitas tinkamesnis, kaip padaryti tarpa, naudoti tik sita (trumpiau, efektyviau, greiciau)
console.log(`${name} ${surname}`);

const fullNameOld = name + " " + surname;
const fullNameNew = `${name} ${surname}`;